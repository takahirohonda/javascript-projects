import styled from 'styled-components'
import { COLOR, getColor } from 'utils'

import { ButtonBasic } from '../ButtonBasic/ButtonBasic'

export const StyledButtonClose = styled(ButtonBasic)`
  background-color: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;

  &:focus {
    svg path {
      fill: ${getColor(COLOR.GREY_550)};
    }
  }
`
