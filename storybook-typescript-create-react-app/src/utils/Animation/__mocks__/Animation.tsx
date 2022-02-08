interface Props {
  children: React.ReactNode
  shouldShow?: boolean
}

/* eslint-disable react/jsx-no-useless-fragment */

export function Animation({ children, shouldShow = true }: Props) {
  return <>{shouldShow && children}</>
}
