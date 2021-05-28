function generatePrintableAscii() {
    return Array(128).fill(0).map((_, i) => i).filter(i => i >= 32 && i < 127).map(i => String.fromCharCode(i)).join('');
}

function printableAsciiChar(ch) {
    const i = String(ch);
    return i.length === 1 && i.charCodeAt(0) >= 32 && i.charCodeAt(0) < 127;
}

function getPrintableAscii(input, n) {
    return String(input)
        .split('')
        .filter(printableAsciiChar)
        .slice(0, n)
        .join('');
}

module.exports = {
    getPrintableAscii,
    printableAsciiChar,
    generatePrintableAscii
};
