# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @branha99/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Returns the first element in an array
* `function2(tail)`: Returns all but the first element of an array
* `function3(middle)`: Returns the middle element(s) of an array
* `function4(assertEqual)`: Compares two values. Returns true if equal and false if not.
* `function5(eqArrays)`: Compares two arrays. Returns true if equal and false if not.
* `function6(assertArraysEqual)`: Prints true if two arrays are equal and false if not.
* `function7(eqObjects)`: Compares two objects. Returns true if equal and false if not.
* `function8(assertObjectsEqual)`: Prints true if two the two objects are equal and false if not.
* `function9(countLetters)`: Returns a count of each of the letters in a sentence.
* `function10(countOnly)`: Returns a count of each string that appears with a truthy value.
* `function11(findKey)`: Returns the property that has a value we are looking for.
* `function12(findKeyByValue)`: Scans an object and return the first key which contains the given value.
* `function13(flatten)`: Returns a single-level array given an array with other arrays inside.
* `function14(letterPositions)`: Returns an object containing the indexes where each letter occurs.
* `function15(map)`: Returns a new array based on the results of a callback function.
* `function16(takeUntil)`: Returns a slice of the array with elements taken from the beginning.
* `function17(without)`: Returns a subset of an array without unwanted elements.