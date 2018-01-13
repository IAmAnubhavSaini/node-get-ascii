# node-get-ascii

Get ascii chars from a string - Node Module

## Usage

```javascript

  > var getAscii = require('./')

  > getAscii('abcdefghijklmnop', 10)
  'abcdefghij'

  > getAscii('abcdefghijklmnop')
  'abcdefghijklmnop'

  > getAscii('abc™¡™•¡∆∂ß˚çˆ…å˜çåß˚¬˜defghijklmnop')
  'abcdefghijklmnop'

  > getAscii('abc™¡™•¡∆∂ß˚çˆ…å˜çåß˚¬˜defghijklmnop', 10)
  'abcdefghij'

```

## License

MIT &copy; 2018 Git Faf
