// I decided to leave current naming for typography to use them as normal components
/* eslint-disable custom/styled-components-naming */
import styled, { css } from 'styled-components'
import { BREAKPOINT } from 'styles/breakpoints'
import { COLOR, getColor } from 'utils'

export const DataMediumTypography = css`
  font-size: 16px;
  line-height: 1.5;
`

export const DataSmallTypography = css`
  font-size: 14px;
  line-height: 1.43;
`

export const BodyExtraLargeTypography = css`
  font-size: 22px;
  line-height: 1.36;
`

export const BodyLargeTypography = css`
  font-size: 18px;
  line-height: 1.55;
`

export const BodyDefaultTypography = css`
  font-size: 16px;
  line-height: 1.5;
`

export const BodySmallTypography = css`
  font-size: 14px;
  line-height: 1.43;
`

export const InterZellerMediumFont = css`
  font-weight: 500;
`

export const H1 = styled.h1`
  ${InterZellerMediumFont};
  font-size: 32px;
  line-height: 1.25;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 40px;
    line-height: 1.2;
  }
`

export const H2 = styled.h2`
  ${InterZellerMediumFont};
  font-size: 22px;
  line-height: 1.27;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 24px;
    line-height: 1.33;
  }
`

export const H3 = styled.h3`
  ${InterZellerMediumFont};
  font-size: 20px;
  line-height: 1.4;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 22px;
    line-height: 1.36;
  }
`

export const H4 = styled.h4`
  ${InterZellerMediumFont}
  font-size: 18px;
  line-height: 1.55;
`

export const H5 = styled.h5`
  ${InterZellerMediumFont}
  font-size: 16px;
  line-height: 1.5;
`

export const H6 = styled.h6`
  ${InterZellerMediumFont}
  font-size: 14px;
  line-height: 1.43;
`

export const BodyLarge = styled.p`
  ${BodyLargeTypography}
`

export const BodyDefault = styled.p`
  ${BodyDefaultTypography}
`

export const BodySmall = styled.p`
  ${BodySmallTypography}
`

export const BodyExtraLarge = styled.p`
  ${BodyExtraLargeTypography}
`

export const BodyXSmallTypography = css`
  font-size: 12px;
  line-height: 1.5;
`

export const BodyXSmall = styled.p`
  ${BodyXSmallTypography}
`

export const BodyOverline = styled.p`
  font-size: 10px;
  line-height: 1.6;
  letter-spacing: 0.16em;
  font-weight: normal;
  text-transform: uppercase;
`

export const DataDisplay = styled.p`
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: -0.02em;
`

export const DataBig = styled.p`
  font-size: 18px;
  line-height: 1.55;
`

export const DataMedium = styled.p`
  ${DataMediumTypography}
`

export const DataSmall = styled.p`
  ${DataSmallTypography}
`

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  cursor: pointer;
  color: ${getColor(COLOR.GREY_550)};
  ${BodySmallTypography}

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    ${BodyDefaultTypography}
  }
`

export const Title = styled(BodyDefault)<{ color?: string }>`
  color: rgba(${(props) => (props.color ? props.color : COLOR.BLACK)}, 1);
  margin: 0;
`

export const Subtitle = styled(DataSmall)<{ customColor?: string }>`
  color: ${(props) => getColor(props.customColor || COLOR.GREY_550)};
  margin: 0;
`

export const Amount = styled(DataMedium)`
  text-align: right;
  margin: 0;
  color: rgba(${COLOR.BLACK}, 1);
`
/* eslint-enable */
