import React, { ButtonHTMLAttributes } from 'react'

export enum BUTTON_SIZE {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  XSMALL = 'XSMALL',
}

export type ButtonBasicPadding = {
  [key in BUTTON_SIZE]: string
}

interface LoadingRenderProps {
  children: React.ReactNode
  isLoading: boolean
  loaderVariant: LoaderVariant
}

export interface ButtonBasicProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId?: string
  size?: BUTTON_SIZE
  isLoading?: boolean
  fullWidth?: boolean
  loaderVariant?: LoaderVariant
  renderLoadingContent?: (renderProps: LoadingRenderProps) => React.ReactNode
}

export enum LoaderVariant {
  Light = 'Light',
  Dark = 'Dark',
}
