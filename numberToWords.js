export function convertNumber(number) {
  const getDigits = (number) => {
    return dg[number];
  };

  const getTeens = (number) => {
    return tn[number % 10];
  };

  const getTens = (number) => {
    return `${tw[(number - (number % 10)) / 10]}-${dg[number % 10]}`;
  };

  const getBeforeHundred = (number) => {
    if (number < 10) {
      return getDigits(number);
    } else if (number < 20) {
      return getTeens(number);
    } else if (number < 100) {
      return getTens(number);
    }
  };

  var th = ["", "thousand", "million", "billion", "trillion"];
  var dg = [
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
  ];
  var tn = [
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
  var tw = [
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
  if (number < 100) {
    return getBeforeHundred(number);
  } else if (number < 1000) {
    let tens = number % 100;
    return `${dg[(number - tens) / 100]} hundred and ${getBeforeHundred(tens)}`;
  }
}
