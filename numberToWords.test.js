import { convertNumber } from "./numberToWords";

describe("the function should return the number words", () => {
  const tests = [
    { number: 0, word: "zero" },
    { number: 1, word: "one" },
    { number: 11, word: "eleven" },
    { number: 21, word: "twenty-one" },
    { number: 123, word: "one hundred and twenty-three" },
    { number: 500, word: "five hundred" },
    { number: 1005, word: "one thousand and five" },
    { number: 1042, word: "one thousand and forty-two" },
    { number: 1105, word: "one thousand one hundred and five" },
    {
      number: 56000781,
      word: "fifty-six million seven hundred and eighty-one",
    },
    {
      number: 56945781,
      word:
        "fifty-six million nine hundred and forty-five thousand seven hundred and eighty-one",
    },
    {
      number: 999999999,
      word:
        "nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine",
    },
    {
      number: 1000000000000001,
      word: "Error! Number is bigger than 999 999 999 999 999",
    },
  ];

  tests.map((test) => {
    it("should return " + test.word, () => {
      const expected = test.word;
      const actual = convertNumber(test.number);
      expect(actual).toBe(expected);
    });
  });
});
