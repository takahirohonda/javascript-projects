import { Box } from 'Components/Layout'
import styled from 'styled-components'
import { COLOR, getColor } from 'utils'

export const StyledComponentPlaceholder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${getColor(COLOR.GREEN_120)};
  border: 1px dashed ${getColor(COLOR.GREEN_1000)};
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  border-radius: 6px;
  box-sizing: border-box;

  &::before {
    font-family: 'Inter Zeller';
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${getColor(COLOR.GREEN_1000)};
    content: 'Replace content';
    max-width: 3rem;
    text-align: center;
  }
`
