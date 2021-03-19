# Number to Words Conversion

## Problem Description

Create a function (or library), suitable for use in a server-side application, that can take an integer in the range 0 to 999,999,999 inclusive and returns the equivalent number, as a string, in British English words.

## Sample Data

| Input     | Output                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------- |
| 0         | zero                                                                                                    |
| 1         | one                                                                                                     |
| 21        | twenty-one                                                                                              |
| 123       | one hundred and twenty-three                                                                            |
| 1005      | one thousand and five                                                                                   |
| 1042      | one thousand and forty-two                                                                              |
| 1105      | one thousand one hundred and five                                                                       |
| 56945781  | fifty-six million nine hundred and forty-five thousand seven hundred and eighty-one                     |
| 999999999 | nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine |

## Guidelines

- Do the simplest thing; a function that implements the above behaviour (with tests) is perfectly acceptable
- Your solution should demonstrate your abilities as a software engineer including, for example, TDD principles, general functional programming principles and domain modelling principles.
- When pairing, rotate the person who is “driving” regularly
- (Recommended) Start with a failing test
