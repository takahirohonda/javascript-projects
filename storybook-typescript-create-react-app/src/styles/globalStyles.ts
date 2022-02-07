import { createGlobalStyle } from 'styled-components'

import { COLOR, getColor } from '../utils'
import { BREAKPOINT } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
  body,
  html,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Inter Zeller', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    color: ${getColor(COLOR.BLACK)};

    * { /* scrollbar styling for FF64+ */
      scrollbar-color: ${getColor(COLOR.GREY_150)} transparent;
      scrollbar-width: thin;
    }

    *::-webkit-scrollbar-track {
      box-shadow: none;
      background-color: transparent;
    }

    *::-webkit-scrollbar {
      width: 2px;
      height: 2px;
      background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${getColor(COLOR.GREY_150)};
      border-radius: 4px;
      border-right: 4px solid transparent;
    }

    .modal-basic-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 10001;
    }

    button {
      font-family: inherit;
    }

    .ReactCrop__crop-selection {
      border: none;
      border-image: none;
      box-shadow: 0 0 0 9999em rgb(255 255 255 / 50%);
    }

    .ReactCrop__drag-handle::after {
      background-color: rgba(255, 255, 255, 1);
      border: none;
      border-radius: 50%;
    }
  }
`

export const theme = {
  breakpoints: [BREAKPOINT.XS, BREAKPOINT.MD, BREAKPOINT.LG].map(
    (b) => `${b / 16}em`
  ),
}
