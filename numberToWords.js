export function convertNumber(number) {
  let and = 0;
  let th = ["", "thousand", "million", "billion", "trillion"];
  let beforeTwenty = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const getDigits = (number) => {
    return beforeTwenty[number];
  };

  const getTens = (number) => {
    return `${tens[(number - (number % 10)) / 10]}-${getDigits(number % 10)}`;
  };

  const getBeforeHundred = (number) => {
    if (number < 20) {
      return getDigits(number);
    } else if (number < 100) {
      return getTens(number);
    }
  };

  const getBeforeThousand = (number) => {
    if (number < 100) {
      and = -1;
      return getBeforeHundred(number);
    } else if (number < 1000) {
      let tens = number % 100;
      return `${getDigits((number - tens) / 100)} hundred${
        tens ? ` and ${getBeforeHundred(tens)}` : ``
      }`;
    }
  };

  const convert = (number, ind = 0, result = "") => {
    if (ind > 4) {
      return "Error! Number is bigger than 999 999 999 999 999";
    }
    let hundred = number % 1000;
    let thousand = (number - hundred) / 1000;
    if (result) {
      result = ind + and ? `${result}` : `and ${result}`;
    }
    result = `${
      hundred || !(thousand || result) ? getBeforeThousand(hundred) : ""
    }${th[ind] && hundred ? " " + th[ind] + " " : ""}${result}`;
    if (thousand) {
      return convert(thousand, ++ind, result, and);
    }
    return result.trim();
  };

  return convert(number);
}

module.exports = { convertNumber };
