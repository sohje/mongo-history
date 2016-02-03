'use strict';
const os = require('os');
const fs = require('fs');
const path = require('path');

module.exports = args => {
    args = args || {};

    if (process.platform === 'win32') {
        return [];
    }

    const homeDir =  os.homedir();
    const mongoHistFile = path.join(homeDir, '.dbshell')
    const uniqFilter = (elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    }

    let elements = [];

    try {
        elements = fs.readFileSync(mongoHistFile, 'utf8').trim().split('\n');
    } catch (err) {}

    return args.uniq ? elements.filter(uniqFilter) : elements;
};
