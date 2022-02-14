import { SvgIcon } from 'Components/SvgIcon'
import { COLOR } from 'utils'

// import { ReactComponent as CloseIcon } from '../../../../assets/svg/close.svg'
import { CloseIcon } from 'Components/Svg/CloseIcon'

import { StyledButtonClose } from './ButtonClose.styled'
import { ButtonCloseProps } from './ButtonClose.types'

export function ButtonClose({
  color = COLOR.BLACK,
  dataTestId = 'button-close',
  hoverColor = COLOR.GREY_550,
  id = 'close-button',
  ...props
}: ButtonCloseProps) {
  return (
    <StyledButtonClose dataTestId={dataTestId} id={id} {...props}>
      <SvgIcon
        color={color}
        height="12"
        hoverColor={hoverColor}
        width="12"
        withCursor
      >
        <CloseIcon />
      </SvgIcon>
    </StyledButtonClose>
  )
}
