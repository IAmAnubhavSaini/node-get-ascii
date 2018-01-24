module.exports = (input, n) => String(input).split('').filter(i => i.charCodeAt(0) >= 32 && i.charCodeAt(0) <= 127).slice(0, n).join('')
