import styled, { css, keyframes } from 'styled-components'

import LoaderDark from 'assets/svg/loader-small.svg'
import LoaderLight from 'assets/svg/loader-small-light.svg'
import { COLOR, getColor } from 'utils'
import { BodyDefaultTypography } from '../../Typography'
import {
  BUTTON_SIZE,
  ButtonBasicPadding,
  LoaderVariant,
} from './ButtonBasic.types'

const buttonPadding: ButtonBasicPadding = {
  [BUTTON_SIZE.LARGE]: '14px 24px',
  [BUTTON_SIZE.MEDIUM]: '12px 22px',
  [BUTTON_SIZE.SMALL]: '8px 24px',
  [BUTTON_SIZE.XSMALL]: '4px 16px',
}

export interface StyledButtonProps {
  size?: BUTTON_SIZE
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${BodyDefaultTypography}
  align-items: center;
  background-color: ${getColor(COLOR.WHITE)};
  border-color: ${getColor(COLOR.BLUE_1000)};
  border-radius: 7px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: ${getColor(COLOR.BLUE_1000)};
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-weight: normal;
  justify-content: center;
  outline: none;
  padding: ${(props) => buttonPadding[props.size || BUTTON_SIZE.MEDIUM]};
  transition: background-color 0.3s ease-out, outline 0.3s ease-out;

  &:disabled {
    cursor: auto;
  }
`

export const StyledButtonContent = styled.div<{
  $loading?: boolean
}>`
  opacity: ${(props) => (props.$loading ? '0' : '1')};
  display: inline-flex;
`

export const StyledSpinnerWrapper = styled.div<{ $loading?: boolean }>`
  display: ${(props) => (props.$loading ? 'flex' : 'none')};
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`

const loadingAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

const getLoader = (loaderVariant: LoaderVariant) => {
  switch (loaderVariant) {
    case LoaderVariant.Dark:
      return LoaderDark
    case LoaderVariant.Light:
    default:
      return LoaderLight
  }
}

const getLoaderBackground = (loaderVariant: LoaderVariant) =>
  css`url(${getLoader(loaderVariant)}) no-repeat`

export const StyledSpinner = styled.div<{ loaderVariant: LoaderVariant }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: 1s ${loadingAnimation} linear infinite;
  position: relative;
  display: inline-block;
  background: ${({ loaderVariant }) => getLoaderBackground(loaderVariant)};
`

export const StyledWrapper = styled.div`
  position: relative;
`
