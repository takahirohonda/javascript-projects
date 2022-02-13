import {
  StyledButtonContent,
  StyledSpinner,
  StyledSpinnerWrapper,
  StyledWrapper,
} from './ButtonBasic.styled'
import { LoaderVariant } from './ButtonBasic.types'

interface Props {
  isLoading: boolean
  loaderVariant: LoaderVariant
  children: React.ReactNode
}

export function LoaderWrapper({ isLoading, loaderVariant, children }: Props) {
  return (
    <StyledWrapper>
      <StyledButtonContent data-testid="button-content" $loading={isLoading}>
        {children}
      </StyledButtonContent>
      <StyledSpinnerWrapper data-testid="button-loader" $loading={isLoading}>
        <StyledSpinner loaderVariant={loaderVariant} />
      </StyledSpinnerWrapper>
    </StyledWrapper>
  )
}
