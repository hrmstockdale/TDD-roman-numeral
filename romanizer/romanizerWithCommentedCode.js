// const romanizer = num => {
//   if (num === 1) {
//     return "I";
//   } else if (num === 2) {
//     return "II";
//   }
// };
// red
// green
// red
// green
// -> refactor as a rule based on similarities has been discovered
// -> At this stage, our code can handle MORE cases than the total cases covered in tests

// const romanizer = num => {
//   let numeral = "";
//   for (let i = 0; i < num; i++) {
//     numeral += "I";
//   }
//   return numeral;
// };

// const romanizer = num => {
//   let numeral = "";
//   if (num === 4) {
//     return "IV";
//   }
//   for (let i = 0; i < num; i++) {
//     numeral += "I";
//   }
//   return numeral;
// };

// remove duplication - *return statements in middle of function block often leads to code duplicaiton*

// const romanizer = num => {
//   let numeral = "";
//   if (num === 5) {
//     numeral += "V";
//   } else if (num === 4) {
//     numeral += "IV";
//   } else {
//     for (let i = 0; i < num; i++) {
//       numeral += "I";
//     }
//   }
//   return numeral;
// };

// const romanizer = num => {
//   let remaining = num;
//   let numeral = "";
//   if (remaining == 9) {
//     numeral += "IX";
//     remaining -= 9;
//   }
//   if (remaining >= 5) {
//     numeral += "V";
//     remaining -= 5;
//   }
//   if (remaining === 4) {
//     numeral += "IV";
//     remaining -= 4;
//   }
//   for (let i = 0; i < remaining; i++) {
//     numeral += "I";
//   }

//   return numeral;
// };

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

// const romanizer = num => {
//   let remaining = num;
//   let numeral = "";
//   values.forEach(x => {
//     if (remaining >= x.arabic) {
//       numeral += x.roman;
//       remaining -= x.arabic;
//     }
//   });
//   while (remaining > 0) {
//     numeral += "I";
//     remaining -= 1;
//   }
//   return numeral;
// };

// const romanizer = num => {
//   let remaining = num;
//   let numeral = "";
//   values.forEach(x => {
//     while (remaining >= x.arabic) {
//       numeral += x.roman;
//       remaining -= x.arabic;
//     }
//   });
//   return numeral;
// };

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
