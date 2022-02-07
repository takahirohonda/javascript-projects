import { COLOR, createFill, getColor } from 'utils'
import styled, { css } from 'styled-components'

interface SvgIconProps {
  children: React.ReactNode
  color?: string
  backgroundColor?: string
  dataTestId?: string
  hoverColor?: string
  height?: string
  width?: string
  withBorder?: boolean
  withCursor?: boolean
  withMargin?: boolean
  withMarginRight?: boolean
  withRotation?: boolean
  className?: string
  alt?: string
  ariaHidden?: boolean
}

const withCursorStyle = `cursor: pointer;`
const withMarginRightStyle = `margin-right: 16px;`
const withMarginStyle = `margin: 0 10px 10px 0;`
const withRotationStyle = `transform: rotate(-180deg);`
const withBorderStyle = css`
  border: 1px solid ${getColor(COLOR.GREY_150)};
  border-radius: 4px;
`

export const StyledContainer = styled.div<SvgIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.withCursor && withCursorStyle}
  ${(props) => props.withMargin && withMarginStyle}
  ${(props) => props.withMarginRight && withMarginRightStyle}
  ${(props) => props.withBorder && withBorderStyle}

  svg {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    ${(props) => props.withRotation && withRotationStyle}
    transition: all 0.3s ease-out;

    path {
      transition: all 0.3s ease-out;
      ${(props) => props.color && createFill(props.color)};
    }

    circle {
      ${(props) => props.backgroundColor && createFill(props.backgroundColor)}
    }
  }

  &:hover {
    svg path {
      ${(props) => props.hoverColor && createFill(props.hoverColor)};
    }
  }
`

export const SvgIcon = ({
  children,
  color,
  backgroundColor,
  dataTestId,
  height,
  hoverColor,
  width,
  withBorder,
  withCursor,
  withMargin,
  withMarginRight,
  withRotation,
  className,
  alt,
  ariaHidden,
}: SvgIconProps) => (
  <StyledContainer
    color={color}
    backgroundColor={backgroundColor}
    className={className}
    data-testid={dataTestId}
    hoverColor={hoverColor}
    height={height}
    width={width}
    withBorder={withBorder}
    withCursor={withCursor}
    withMargin={withMargin}
    withMarginRight={withMarginRight}
    withRotation={withRotation}
    role="img"
    alt={alt}
    aria-label={alt}
    aria-hidden={ariaHidden}
  >
    {children}
  </StyledContainer>
)
