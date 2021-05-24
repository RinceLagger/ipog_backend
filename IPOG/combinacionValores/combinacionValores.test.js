const combinacionValores = require("./combinacionValores");

test("test 1: C1 D2 ", () => {
  expect(() => combinacionValores([], [0, 1])).toThrow(Error);
});
test("test 2: C2 D3 ", () => {
  expect(() =>
    combinacionValores([{ P1: 3 }, { P2: 2 }, { P3: 3 }], [])
  ).toThrow(Error);
});
test("test 3: C3 D4 ", () => {
  expect(() =>
    combinacionValores([{ P1: 1 }, { P2: 2 }, { P3: 3 }], [0, 1, 1])
  ).toThrow(Error);
});
test("test 4: C4 D1 ", () => {
  expect(() =>
    combinacionValores([{ P1: 3 }, { P2: 2 }, { P3: 3 }], [0, 0, 0])
  ).toThrow(Error);
});

let Resultado1 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
  [2, 0],
  [2, 1],
];

test("test 5: C3 D3 ", () => {
  expect(
    combinacionValores([{ P1: 3 }, { P2: 2 }, { P3: 3 }], [1, 1, 0])
  ).toStrictEqual(Resultado1);
});
