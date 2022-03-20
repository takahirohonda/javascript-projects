import { BoxProps, Flex as FlexBase } from 'reflexbox/styled-components'
import styled from 'styled-components'

const StyledFlex = styled(FlexBase)<BoxProps>`
  min-width: auto;
`

export { StyledFlex as Flex }
