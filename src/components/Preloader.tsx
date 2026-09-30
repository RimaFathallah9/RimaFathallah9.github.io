import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type PreloaderProps = {
  onDone: () => void
}

const letters = ['R', 'i', 'm', 'a']

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
    const duration = 1700
    let frame = 0

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(next)
      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        window.setTimeout(() => setPhase('reveal'), 220)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previous
    }
  }, [onDone])

  useEffect(() => {
    if (phase !== 'reveal') return
    const timer = window.setTimeout(() => setPhase('exit'), 1400)
    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    if (phase !== 'exit') return
    document.body.style.overflow = ''
    const timer = window.setTimeout(onDone, 280)
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
          {letters.map((letter, index) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                color: index === letters.length - 1 ? ['#c8c4ba', '#1c2330'] : '#1c2330',
              }}
              transition={{
                delay: 0.12 + index * 0.14,
                duration: index === letters.length - 1 ? 0.9 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
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

      <motion.div
        className="absolute left-1/2 z-20 bg-[#07080b]"
        style={{ borderRadius: '50%', x: '-50%' }}
        initial={{ width: '130vw', height: '18vh', bottom: '-14vh' }}
        animate={
          phase === 'load'
            ? { width: '130vw', height: '18vh', bottom: '-14vh' }
            : { width: '340vw', height: '340vh', bottom: '-70vh' }
        }
        transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (phase === 'reveal') setPhase('exit')
        }}
      />
    </motion.div>
  )
}
