# Rima Fathallah Portfolio - Copilot Instructions

This file provides context for GitHub Copilot to assist with development on this premium portfolio project.

## Project Overview

This is a production-ready personal portfolio website for Rima Fathallah - AI Engineer, Researcher, and Data Science Innovator.

**Tech Stack**: React 18 + TypeScript + Tailwind CSS + Framer Motion + React Three Fiber + Vite

**Design**: Modern, cinematic, inspired by Apple/Tesla/Linear/Stripe/Vercel

## Architecture

### Component Structure
- **Sections**: Hero, About, Research, Projects, Skills, Experience, Leadership, Certifications, Awards, Contact
- **Shared Components**: Navigation, Footer, Loader, CursorTrail, ScrollToTop
- **3D Components**: Neural Network visualization using React Three Fiber

### Styling Approach
- Tailwind CSS for utilities
- Custom CSS animations in index.css
- Glass-morphism and gradient effects
- Dark theme with Electric Violet (#8B5CF6) accents

### Animation Framework
- Framer Motion for component animations
- GSAP for timeline-based animations
- React Three Fiber for 3D effects
- Scroll triggers for section animations

## Development Guidelines

### Component Standards
- Use functional components with hooks
- TypeScript for type safety
- Framer Motion for animations
- Proper error boundaries
- Performance-optimized with memo when needed

### Styling Conventions
- Use Tailwind utility classes
- Custom animations in CSS modules or inline
- Consistent spacing (px-4, py-6, etc.)
- Color palette: Deep Space Black, Electric Violet, Neon Purple, Soft Blue

### Animation Patterns
- Entrance animations on mount
- Scroll-triggered animations with whileInView
- Hover states for interactivity
- Staggered animations for lists

## Code Quality

- **Type Safety**: Full TypeScript coverage
- **Linting**: ESLint with React/TypeScript rules
- **Formatting**: Prettier compatible
- **Performance**: Code splitting, lazy loading enabled

## File Naming
- Components: PascalCase (e.g., Navigation.tsx)
- Utilities: camelCase
- Types: PascalCase with T prefix if needed
- CSS: index.css (global), component-specific in JS

## Key Dependencies

```
react@18.2.0              - UI Framework
typescript@5.2.2          - Type checking
tailwindcss@3.3.5         - Styling
framer-motion@10.16.14    - Animations
react-three-fiber@8.14.0  - 3D rendering
gsap@3.12.2              - Timeline animations
vite@5.0.5               - Build tool
```

## Deployment

- Build: `npm run build` → Creates `/dist` folder
- Preview: `npm run preview`
- Type check: `npm run type-check`
- Lint: `npm run lint`

## Common Tasks

### Adding a New Section
1. Create component in `src/components/sections/`
2. Import in `App.tsx`
3. Add to Suspense boundary
4. Add navigation link in Navigation.tsx
5. Style with Tailwind + custom animations

### Adding 3D Visualization
1. Create component in `src/components/3d/`
2. Use React Three Fiber Canvas component
3. Use Preload from @react-three/drei
4. Optimize performance with useMemo

### Updating Colors
- Update tailwind.config.ts theme.extend.colors
- Use throughout with class names like `text-electric-violet`

### Adding Animations
- Use Framer Motion's motion components
- Use variants for complex animations
- Always include viewport triggers for scroll effects

## Performance Considerations

- Images: Use optimized formats and sizes
- 3D: Limit geometry complexity
- Animations: Use GPU-accelerated properties (transform, opacity)
- Lazy load sections when possible
- Code split at route boundaries

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Fallbacks for older browsers
- CSS Grid and Flexbox for layout

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Testing Recommendations

- Visual regression testing for animations
- Cross-browser testing
- Mobile responsiveness testing
- Performance profiling
- Accessibility audit

---

**Last Updated**: June 2024
**Version**: 1.0.0
