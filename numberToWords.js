export function convertNumber(number, ind = 0, result = "", and = 0) {
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

  const getDigits = (number) => {
    return dg[number];
  };

  const getTeens = (number) => {
    return tn[number % 10];
  };

  const getTens = (number) => {
    return `${tw[(number - (number % 10)) / 10]}-${getDigits(number % 10)}`;
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

  const getBeforeSandLion = (number) => {
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
  if (ind > 4) {
    return "Error! Number is bigger than 999 999 999 999 999";
  }
  let hundred = number % 1000;
  let thousand = (number - hundred) / 1000;
  if (result) {
    result = ind + and ? `${result}` : `and ${result}`;
  }
  result = `${hundred || !result ? getBeforeSandLion(hundred) : ""}${
    th[ind] && hundred ? " " + th[ind] + " " : ""
  }${result}`;
  if (thousand) {
    return convertNumber(thousand, ++ind, result, and);
  }
  return result;
}
