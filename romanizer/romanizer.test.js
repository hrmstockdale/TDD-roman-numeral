const test = require("tape");
const romanizer = require("./romanizer");

test("Tape is up and running", t => {
  t.equal(1, 1, "One should equal one");
  t.end();
});

test("passing in 1 returns I", t => {
  const actual = romanizer(1);
  const expected = "I";
  t.equal(actual, expected, "Should return I when given 1");
  t.end();
});

test("passing in 1 returns I & pass 2 returns II", t => {
  const actual1 = romanizer(1);
  const expected1 = "I";
  const actual2 = romanizer(2);
  const expected2 = "II";
  const actual3 = romanizer(3);
  const expected3 = "III";
  t.equal(actual1, expected1, "Should return I when given 1 ");
  t.equal(actual2, expected2, "Should return II when given 2");
  t.equal(actual3, expected3, "Should return III when given 3");
  t.end();
});

test("passing in 4 returns IV", t => {
  const actual = romanizer(4);
  const expected = "IV";
  t.equal(actual, expected, "Should return IV when given 4");
  t.end();
});

test("passing in 5 returns V", t => {
  const actual = romanizer(5);
  const expected = "V";
  t.equal(actual, expected, "Should return V when given 5");
  t.end();
});

test("passing in 6 returns VI", t => {
  const actual = romanizer(6);
  const expected = "VI";
  t.equal(actual, expected, "Should return VI when given 6");
  t.end();
});

test("passing in 7 returns VII", t => {
  const actual = romanizer(7);
  const expected = "VII";
  const actual8 = romanizer(8);
  const expected8 = "VIII";
  t.equal(actual, expected, "Should return VII when given 7");
  t.equal(actual8, expected8, "Should return VIII when given 8");
  t.end();
});

test("passing in 9 returns IX", t => {
  const actual = romanizer(9);
  const expected = "IX";
  t.equal(actual, expected, "Should return IX when given 9");
  t.end();
});

test("passing in 29 returns XXIX & pass 30 returns XXX", t => {
  const actual = romanizer(29);
  const expected = "XXIX";
  const actual30 = romanizer(30);
  const expected30 = "XXX";
  t.equal(actual, expected, "Should return XXIX when given 29");
  t.equal(actual30, expected30, "Should return XXX when given 30");
  t.end();
});

test("passing in 109 returns CIX", t => {
  const actual = romanizer(109);
  const expected = "CIX";
  t.equal(actual, expected, "Should return CIX when given 109");
  t.end();
});
