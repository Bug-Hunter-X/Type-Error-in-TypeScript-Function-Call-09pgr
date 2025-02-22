# Type Error in TypeScript Function Call

This repository demonstrates a common type error in TypeScript: passing a string argument to a function that expects a number.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, in the code, we are calling it with a string and a number, resulting in a type error.

## Solution

The solution involves type checking to ensure that only numbers are passed as arguments to the `add` function.