const values = [
  { arabic: 1000, roman: "M" },
  { arabic: 900, roman: "CM" },
  { arabic: 500, roman: "D" },
  { arabic: 400, roman: "CD" },
  { arabic: 100, roman: "C" },
  { arabic: 90, roman: "XC" },
  { arabic: 50, roman: "L" },
  { arabic: 40, roman: "XL" },
  { arabic: 10, roman: "X" },
  { arabic: 9, roman: "IX" },
  { arabic: 5, roman: "V" },
  { arabic: 4, roman: "IV" },
  { arabic: 1, roman: "I" }
];

const romanizer = num => {
  if (num <= 0) {
    return "positive integers only accepted";
  }
  if (num >= 5000) {
    return "find a better numeral system";
  }
  let remaining = num;
  let numeral = "";
  values.forEach(x => {
    while (remaining >= x.arabic) {
      numeral += x.roman;
      remaining -= x.arabic;
    }
  });
  return numeral;
};

if (typeof module !== "undefined") {
  module.exports = romanizer;
}
