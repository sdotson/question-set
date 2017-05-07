#! /usr/bin/env node

// Question 3
// Write a program that reads in events from STDIN and outputs the events back to to
// STDOUT with the "overlap" flag flipped for the events that overlap with others. The first
// line of the input will be the number of events to follow, N. N will be 1 million or more.
// The subsequent N lines will contain events in the following format:
// { 'start_time': <string>, 'end_time': <string>, 'overlap': <bool False> }

// Sample input:
// 3
// { 'start_time': "2016-01-01 00:00:00", 'end_time': "2016-05-01 00:00:00", 'overlap': 0}
// { 'start_time': "2016-02-01 00:00:00", 'end_time': "2016-06-01 00:00:00", 'overlap': 0}
// { 'start_time': "2012-01-01 00:00:00", 'end_time': "2012-05-01 00:00:00", 'overlap': 0}

// Sample output:
// { 'start_time': "2016-01-01 00:00:00", 'end_time': "2016-05-01 00:00:00", 'overlap': 1}
// { 'start_time': "2016-02-01 00:00:00", 'end_time': "2016-06-01 00:00:00", 'overlap': 1}
// { 'start_time': "2012-01-01 00:00:00", 'end_time': "2012-05-01 00:00:00", 'overlap': 0}

const test = `3
{ 'start_time': "2016-01-01 00:00:00", 'end_time': "2016-05-01 00:00:00", 'overlap': 0}
{ 'start_time': "2016-02-01 00:00:00", 'end_time': "2016-06-01 00:00:00", 'overlap': 0}
{ 'start_time': "2012-01-01 00:00:00", 'end_time': "2012-05-01 00:00:00", 'overlap': 0}`;

const formatted = test.split("\n");

const n = formatted[0];
const lines = formatted.slice(1);

function getObject(string) {
  return JSON.parse(string.replace(/\'/g,'\"'));
}

function convertBackToImproperJSON(obj) {
  return JSON.stringify(obj).replace(/"(start_time|end_time|overlap)"/g,`'$1'`);
}

const sortedLines = lines.sort((previous, current) => {

  const previousTime = getObject(previous).start_time;
  const currentTime = getObject(current).start_time;

  if (previousTime < currentTime) {
    return -1;
  }

  if (previousTime === currentTime) {
    return 0;
  }

  return 1;
});

const resultsArray = sortedLines.map((line, index) => {
  let current = getObject(sortedLines[index]),
    next,
    previous;

  if (index !== sortedLines.length - 1) {
    next = getObject(sortedLines[index + 1]);
  }

  if (index !== 0) {
    previous = getObject(sortedLines[index - 1]);
  }

  if (index === 0) {
    if (current.end_time >= next.start_time) {
      current.overlap = 1;
    }
  } else if (index === sortedLines.length - 1) {
    if (previous.end_time >= current.start_time) {
      current.overlap = 1;
    }
  } else {
    if (previous.end_time >= current.start_time || next.start_time <= current.end_time) {
      current.overlap = 1;
    }
  }

  return convertBackToImproperJSON(current);
});

console.log(resultsArray.join('\n'));
