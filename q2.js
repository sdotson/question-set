#! /usr/bin/env node

// Question 2 Part a:
// Write a program that reads in the names of two files from STDIN and outputs the number
// of strings they have in common to STDOUT. Each file contains 1 million strings of 32
// characters, 1 per line.

// Sample input:
// strings_1.txt

// Sample output:
// 418239

const Promise = require('bluebird');
const fs = require('fs');
const readFile = Promise.promisify(fs.readFile);

const file1 = process.argv[2];
const file2 = process.argv[3];

function createStringArray(file) {
  return readFile(file, 'utf8').then((contents) => {
    return contents.toString().split("\n");
  });
}

function compareStringArrays(file1, file2) {
  return Promise.all([createStringArray(file1), createStringArray(file2)]).then((data) => {
    const arr1 = data[0];
    const arr2 = data[1];

    let count = 0;

    arr1.forEach((str) => {
      if (arr2.includes(str)) {
        count++;
      }
    });

    return count;
  });
}

compareStringArrays(file1, file2).then(console.log);
