# Answers

## Getting started

Download this file package, update to latest Node with `npm install -g n` and run `npm install`.

### Question 1

Run `node q1 '(8 / 3 * 5) + 10 - 6'`

### Question 2

Run `node q2 file1.txt file2.txt`

#### Question 2b

Would I change my approach if there were 1 billion strings? I would implement a more efficient algorithm, like a divide and conquer style binary search.

### Question 3

Run `node q3 3
{ 'start_time': "2016-01-01 00:00:00", 'end_time': "2016-05-01 00:00:00", 'overlap': 0}
{ 'start_time': "2016-02-01 00:00:00", 'end_time': "2016-06-01 00:00:00", 'overlap': 0}
{ 'start_time': "2012-01-01 00:00:00", 'end_time': "2012-05-01 00:00:00", 'overlap': 0}`

#### Question 3b

The current program will work with a list of events of any size. The first argument `3` isn't even needed.
