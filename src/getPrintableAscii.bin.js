#!/usr/bin/env node

const {getPrintableAscii} = require('./getPrintableAscii');
const red = require('@f0c1s/color-red');
const yellow = require('@f0c1s/color-yellow');
const blue = require('@f0c1s/color-blue');
const magenta = require('@f0c1s/color-magenta');

const usage = red('USAGE');
const cmdName = yellow(process.argv[1].split('/').pop());
const strstr = magenta('<string>');
const numstr = blue('<number|optional,default=100>');
const usageString = `${usage}: ${cmdName} ${strstr} ${numstr}`;

const str = process.argv[2];
if (!str) {
    return console.log(usageString);
}
const len = Number(process.argv[3]) || 100;

console.log(getPrintableAscii(str, len));
