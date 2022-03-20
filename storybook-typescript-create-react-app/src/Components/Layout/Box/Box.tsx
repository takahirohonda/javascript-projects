import { Box as BaseBox, BoxProps } from 'reflexbox/styled-components'
import styled from 'styled-components'

const StyledBox = styled(BaseBox)<BoxProps>`
  min-width: auto;
`

export { StyledBox as Box }
