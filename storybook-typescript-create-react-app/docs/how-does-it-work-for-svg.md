# How does the build work for svg

1. When the svg file is imported as a React component, it will be

This is how it is imported

```ts
import { ReactComponent as CloseIcon } from '../../../../assets/svg/close.svg'
```

```js
import * as React from 'react'

var _path

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        viewBox: '0 0 12 12',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      props
    ),
    _path ||
      (_path = /*#__PURE__*/ React.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d:
          'M6 4.586 1.707.293.293 1.707 4.586 6 .293 10.293l1.414 1.414L6 7.414l4.293 4.293 1.414-1.414L7.414 6l4.293-4.293L10.293.293 6 4.586z',
        fill: '#212322',
      }))
  )
}

export { SvgClose as ReactComponent }
```

2. When the svg file is imported as asset

```ts
import LoaderDark from '../../../../assets/svg/loader-small.svg'
```

This will be used as url for css background prop. It works fine. Instead of url, it becomes a string.

```js
import 'react'

var LoaderDark =
  'data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%227%22%20stroke%3D%22url%28%23paint0_angular%29%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M15%208C15%204.13401%2011.866%201%208%201C4.13401%201%201%204.13401%201%208%22%20stroke%3D%22url%28%23paint1_radial%29%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3CradialGradient%20id%3D%22paint0_angular%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate%288%208%29%20rotate%28137.49%29%20scale%288.13941%29%22%3E%3Cstop%20offset%3D%220.00626136%22%20stop-color%3D%22%23ABA9A7%22%20stop-opacity%3D%220.16%22%2F%3E%3Cstop%20offset%3D%220.734375%22%20stop-color%3D%22%23ABA9A7%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint1_radial%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate%2815%208%29%20rotate%28-180%29%20scale%2814%29%22%3E%3Cstop%20stop-color%3D%22%23ABA9A7%22%2F%3E%3Cstop%20offset%3D%220.9375%22%20stop-color%3D%22%23ABA9A7%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E'

export { LoaderDark as default }
```
