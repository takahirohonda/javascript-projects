// This will include react because rollup include node_modules when the path is added.
// import { forwardRef } from 'react/index'
import { forwardRef } from 'react'

import { StyledButton } from './ButtonBasic.styled'
import {
  BUTTON_SIZE,
  ButtonBasicProps,
  LoaderVariant,
} from './ButtonBasic.types'
import { LoaderWrapper } from './LoaderWrapper'
// This doesn't cause packaging unnecessary dependencies.
import * as helper from './rollupCircularDependencyTest'

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
      onClick={() => helper.testingRollupCircularDependencies()}
      {...props}
    >
      {renderLoadingContent({ isLoading, loaderVariant, children })}
    </StyledButton>
  )
)
