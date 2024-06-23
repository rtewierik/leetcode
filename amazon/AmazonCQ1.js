'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumNumberOfPages' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY pages
 *  2. INTEGER days
 */

function minimumNumberOfPages(pages, days) {
  var currentChapter = 0;
  if (pages.length > days) {
    return -1;
  }
  pages.sort();
  if (pages.length == days) {
    return pages[pages.length - 1];
  }
  var currentChapter = pages.length - (days - pages.length) - 1;
  for (let i = currentChapter; i < pages.length; i++) {
    let extraDays = days - i;
    for (let j = pages.length - 1; j >= currentChapter; j--) {
      const numberOfDaysForChapter = Math.ceil(pages[j] / pages[i]);
      extraDays -= numberOfDaysForChapter;
      if (extraDays < 0) {
        break;
      }
    }
    if (extraDays >= 0) {
      return pages[i];
    }
  }
  return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pagesCount = parseInt(readLine().trim(), 10);

    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        const pagesItem = parseInt(readLine().trim(), 10);
        pages.push(pagesItem);
    }

    const days = parseInt(readLine().trim(), 10);

    const result = minimumNumberOfPages(pages, days);

    ws.write(result + '\n');

    ws.end();
}

const a = minimumNumberOfPages([2, 3, 4, 5], 5);
console.log(a);