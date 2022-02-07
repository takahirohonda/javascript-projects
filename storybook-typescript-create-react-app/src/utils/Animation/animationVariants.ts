import { Variants } from 'framer-motion/types/types'

export const slideDownAnimationVariants: Variants = {
  intro: {
    y: -50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
  enter: {
    y: 0,
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, opacity: { duration: 0.2, delay: 0.1 } },
  },
  exit: {
    y: -50,
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      height: { duration: 0.2, delay: 0.1 },
      y: { duration: 0.2, delay: 0.1 },
    },
  },
}

export const createStaggeredSlideSideAnimationVariant = (
  baseDelay: number,
  order: number,
  initialDelay: number
) => ({
  intro: {
    x: 50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
  enter: {
    x: 0,
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      delay: (baseDelay * (3 + order)) / 4 + initialDelay,
      height: { duration: 0.3 },
    },
  },
  exit: {
    x: -50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
})

export const slideSideAnimationVariants: Variants = {
  intro: {
    x: 50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
  enter: {
    x: 0,
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      delay: 0.4,
      height: { duration: 0.3 },
    },
  },
  exit: {
    x: -50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
}

export const slideSideReversedAnimationVariants: Variants = {
  intro: {
    x: -50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, delay: 0.3 },
  },
  enter: {
    x: 0,
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      delay: 0.4,
      height: { delay: 0.3, duration: 0.3 },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
}

export const popAnimationVariants: Variants = {
  intro: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'backInOut' },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'backInOut' },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'backInOut' },
  },
}

export const fadeInHeightAnimationVariants: Variants = {
  intro: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, delay: 0.3 },
  },
  enter: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      delay: 0.4,
      height: { delay: 0.3, duration: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
}

export const fadeInAnimationVariants: Variants = {
  intro: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
}
