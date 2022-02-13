import { forwardRef } from 'react'

import { StyledButton } from './ButtonBasic.styled'
import {
  BUTTON_SIZE,
  ButtonBasicProps,
  LoaderVariant,
} from './ButtonBasic.types'
import { LoaderWrapper } from './LoaderWrapper'

export const ButtonBasic = forwardRef<HTMLButtonElement, ButtonBasicProps>(
  (
    {
      dataTestId = 'button-default',
      type = 'button',
      size = BUTTON_SIZE.MEDIUM,
      isLoading = false,
      loaderVariant = LoaderVariant.Dark,
      disabled,
      children,
      renderLoadingContent = LoaderWrapper,
      ...props
    },
    ref
  ) => (
    <StyledButton
      data-testid={dataTestId}
      ref={ref}
      size={size}
      type={type}
      disabled={disabled || isLoading}
      {...props}
    >
      {renderLoadingContent({ isLoading, loaderVariant, children })}
    </StyledButton>
  )
)
