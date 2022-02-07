interface Props {
  children: React.ReactNode
  shouldShow?: boolean
}

export const Animation = ({ children, shouldShow = true }: Props) => (
  <>{shouldShow && children}</>
)
