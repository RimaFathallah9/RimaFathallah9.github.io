import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type PreloaderProps = {
  onDone: () => void
}

function PixarI({ settled }: { settled: boolean }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.34em]">
      <motion.span
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ height: '0.66em', originY: 1 }}
        animate={settled ? { scaleY: [1, 0.76, 1.05, 1], scaleX: [1, 1.12, 0.98, 1] } : { scaleY: 1, scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="absolute bottom-0 left-1/2 block -translate-x-1/2 leading-none">i</span>
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute left-1/2 top-[0.05em] block h-[0.15em] w-[0.15em] rounded-full bg-[#1c2330]"
        initial={{ x: '-50%', y: -40, rotate: -20 }}
        animate={
          settled
            ? { x: '-50%', y: 0, rotate: 0, scaleX: [1.4, 0.85, 1], scaleY: [0.6, 1.25, 1] }
            : {
                x: ['-80%', '-50%', '-20%', '-50%', '-65%', '-50%'],
                y: [-34, 4, -18, 6, -26, 2],
                rotate: [-14, 6, -8, 10, -4, 0],
                scaleX: [0.95, 1.3, 0.9, 1.35, 0.92, 1.25],
                scaleY: [1.12, 0.65, 1.15, 0.6, 1.12, 0.7],
              }
        }
        transition={
          settled
            ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            : { duration: 1.45, repeat: Infinity, ease: 'easeInOut' }
        }
      />
    </span>
  )
}

export function Preloader({ onDone }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'load' | 'reveal' | 'exit'>('load')

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.body.style.overflow = previous
      onDone()
      return
    }

    const start = performance.now()
    const duration = 2200
    let frame = 0
    let revealTimer = 0
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      document.body.style.overflow = previous
      onDone()
    }

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(next)
      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        revealTimer = window.setTimeout(() => setPhase('reveal'), 650)
      }
    }

    frame = requestAnimationFrame(tick)
    const safety = window.setTimeout(finish, 5200)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(revealTimer)
      window.clearTimeout(safety)
      document.body.style.overflow = previous
    }
  }, [onDone])

  useEffect(() => {
    if (phase !== 'reveal') return
    const timer = window.setTimeout(() => setPhase('exit'), 500)
    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    if (phase !== 'exit') return
    document.body.style.overflow = ''
    const timer = window.setTimeout(onDone, 450)
    return () => window.clearTimeout(timer)
  }, [phase, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[80] overflow-hidden bg-[#f3f0e8] text-[#1c2330]"
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <motion.p
          className="mb-8 text-[11px] uppercase tracking-[0.42em] text-[#8b9098]"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'load' ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          Portfolio
        </motion.p>

        <div className="flex items-end text-6xl font-medium tracking-tight sm:text-8xl">
          {['R', 'm', 'a'].map((letter, index) => {
            const order = index === 0 ? 0 : index + 1
            return (
              <span key={letter} className="contents">
                {index === 1 && <PixarI settled={progress >= 100} />}
                <motion.span
                  initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    color: letter === 'a' ? ['#c8c4ba', '#1c2330'] : '#1c2330',
                  }}
                  transition={{
                    delay: 0.12 + order * 0.14,
                    duration: letter === 'a' ? 0.9 : 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            )
          })}
          <motion.span
            className="mb-2 ml-1 text-4xl text-[#1c2330] sm:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
          >
            .
          </motion.span>
        </div>

        <div className="mt-10 w-44 sm:w-56">
          <div className="h-px w-full bg-[#d5d1c7]">
            <motion.div
              className="h-px origin-left bg-[#1c2330]"
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: 'linear', duration: 0.05 }}
            />
          </div>
          <p className="mt-3 text-center font-mono text-xs tracking-[0.28em] text-[#8d928c]">
            {progress}%
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12vh] rounded-t-[50%] bg-[#07080b]" />
    </motion.div>
  )
}
