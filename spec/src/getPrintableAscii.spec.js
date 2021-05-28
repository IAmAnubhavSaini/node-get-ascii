const {getPrintableAscii, printableAsciiChar, generatePrintableAscii} = require('../../src/getPrintableAscii');

const printableAscii = generatePrintableAscii();
const zeroTo127 = Array(128).fill(0).map((_, i) => i).map(i => String.fromCharCode(i)).join('');
const zeroTo31 = Array(32).fill(0).map((_, i) => i).map(i => String.fromCharCode(i)).join('');

describe("getPrintableAscii", () => {
    it(`doesn't change valid string`, () => {
        const expected = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        const actual = getPrintableAscii(printableAscii);
        expect(actual).toEqual(expected);
    });
    it(`returns printable ascii`, () => {
        const expected = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        const actual = getPrintableAscii(zeroTo127);
        expect(actual).toEqual(expected);
    });
});

describe("printableAsciiChar", () => {
    printableAscii.split('').forEach(char => {
        it(`returns true for ${char}`, () => {
            const expected = true;
            const actual = printableAsciiChar(char);
            expect(actual).toEqual(expected);
        });
    });
    zeroTo31.split('').forEach(char => {
        it(`returns false for ${char}`, () => {
            const expected = false;
            const actual = printableAsciiChar(char);
            expect(actual).toEqual(expected);
        });
    });
    it(`returns false for charCode:127`, () => {
        const expected = false;
        const actual = printableAsciiChar(String.fromCharCode(127));
        expect(actual).toEqual(expected);
    });
});

describe("generatePrintableAscii", () => {
    it('generates valid and printable ascii', () => {
        const expected = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        const actual = generatePrintableAscii();
        expect(actual).toEqual(expected);
    });
});