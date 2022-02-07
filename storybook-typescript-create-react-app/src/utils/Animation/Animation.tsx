import { ReactNode } from 'react'
import { AnimatePresence, motion, MotionStyle } from 'framer-motion'
import { Variants } from 'framer-motion/types/types'

interface AnimationProps {
  variants?: Variants
  children: ReactNode
  shouldShow?: boolean
  style?: MotionStyle
  onExitComplete?: () => void
  onTransitionEnd?: () => void
}

export const Animation = ({
  variants,
  children,
  shouldShow = true,
  style,
  onExitComplete,
  onTransitionEnd,
}: AnimationProps) => {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={onExitComplete}>
      {shouldShow && (
        <motion.div
          initial="intro"
          animate="enter"
          exit="exit"
          variants={variants}
          style={style}
          onTransitionEnd={() => onTransitionEnd?.()}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
