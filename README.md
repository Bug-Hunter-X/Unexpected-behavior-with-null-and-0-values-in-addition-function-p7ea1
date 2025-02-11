# Unexpected Behavior with Null and 0 Values in Addition Function

This repository demonstrates a common JavaScript error related to the loose comparison operator (`==`) and how it affects the handling of `null` and `0` values in an addition function.

## Bug Description
The provided code implements an addition function that intends to return 0 if either input is null or undefined. However, due to the use of loose comparison, unexpected results may occur, which are inconsistent with a strict mathematical addition.

## Solution
The solution is to use the strict equality operator (`===`) to check for null and undefined, and 0 for numerical zero values.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` to see the unexpected results.
3. Run `node bugSolution.js` to see how to fix the issue.