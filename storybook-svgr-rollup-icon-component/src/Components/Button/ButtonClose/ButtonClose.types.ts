import { ButtonBasicProps } from '../ButtonBasic/ButtonBasic.types'

export interface ButtonCloseProps extends Omit<ButtonBasicProps, 'size'> {
  color?: string
  hoverColor?: string
}
