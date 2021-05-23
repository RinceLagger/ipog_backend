const combinacionParametros = require("./combinacionParametros");

test("test 1: M1 N6 ", () => {
  expect(() => combinacionParametros(1, 3)).toThrow("error:m, n > 0 y m >= n");
});

test("test 2: M2 N7 ", () => {
  expect(() => combinacionParametros(5, 0)).toThrow("error:m, n > 0 y m >= n");
});

test("test 3: M3 N8 ", () => {
  expect(() => combinacionParametros(0, -5)).toThrow("error:m, n > 0 y m >= n");
});

test("test 4: M1 N6 ", () => {
  expect(() => combinacionParametros(-5, 1)).toThrow("error:m, n > 0 y m >= n");
});

let Resultado1 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
];

test("test 5: M2 N5 ", () => {
  expect(combinacionParametros(5, 1)).toStrictEqual(Resultado1);
});

let Resultado2 = [
  [0, 0, 1, 1, 1],
  [0, 1, 0, 1, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 1, 0],
  [1, 1, 1, 0, 0],
];

test("test 6: M2 N6 ", () => {
  expect(combinacionParametros(5, 3)).toStrictEqual(Resultado2);
});
