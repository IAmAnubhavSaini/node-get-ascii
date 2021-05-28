# node-get-ascii

Get ascii chars from a string - Node Module

> Note: v4
> `getPrintableAscii` is what earlier was `getAscii`: use it. returns string with charCode [32, 127).
> `getAscii` returns string with charCode [0, 127].

## Usage

### as library

```javascript

var getPrintableAscii = require('./').getPrintableAscii

getPrintableAscii('abcdefghijklmnop', 10)
'abcdefghij'

getPrintableAscii('abcdefghijklmnop')
'abcdefghijklmnop'

getPrintableAscii('abc™¡™•¡∆∂ß˚çˆ…å˜çåß˚¬˜defghijklmnop')
'abcdefghijklmnop'

getPrintableAscii('abc™¡™•¡∆∂ß˚çˆ…å˜çåß˚¬˜defghijklmnop', 10)
'abcdefghij'

```

### as command line utility

> `getPrintableAscii <string> <number|optional,default=100>`

1. `npm i -g node-get-ascii`
2. `getPrintableAscii 'abc™¡™•¡∆∂ß˚çˆ…å˜çåß˚¬˜defghijklmnop' 10`

## License

MIT

- &copy; 2018 Git Faf
- &copy; 2021 Anubhav
