const eliminarCubiertas = require("./eliminarCubiertas");

let C1 = [ [ 0, 1, 1 ], [ 1, 0, 1 ] ];
let C2 = [ [ 1, 1, 0 ], [ 1, 0, 1 ] ];
let P1 = [
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
];
let P2 = [
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
    [2, 1],
  ],
];
let Q1 = [0,0,0];
let Q2 = [0,1,1];
let Q3 = [2,0,2];
let Q4 = [2,1,0];

let Resultado1 = [[[0, 1], [1, 0], [1, 1], [2, 0], [2, 1]], [[0, 1], [1, 0], [1, 1], [2, 0], [2, 1]]];
let Resultado2 = [[[0, 1], [1, 0], [1, 1]], [[0, 1], [1, 0], [1, 1]]];
let Resultado3 = [[[0, 1], [1, 0]], [[1, 0], [1, 1]]];
let Resultado4 = [[[1, 0], [1, 1], [2, 0], [2, 1]], [[1, 0], [1, 1], [2, 0], [2, 1]]];
let Resultado5 = [[[0, 1], [1, 0]], [[1, 0], [1, 1]]];
let Resultado6 = [[[1, 0], [1, 1], [2, 1]], [[1, 0], [1, 1], [2, 0], [2, 1]]];
let Resultado7 = [[[0, 1]], [[1, 0], [1, 1]]];
let Resultado8 = [[[1, 0], [1, 1]], [[1, 0], [1, 1], [2, 1]]];

test("test 1: C1 P2	Q1 ", () => {
  expect(
    eliminarCubiertas(C1,P2,Q1)
  ).toStrictEqual(Resultado1);
});

test("test 2: C1 P1 Q1 ", () => {
  expect(
    eliminarCubiertas(C1, P1, Q1)
  ).toStrictEqual(Resultado2);
});

test("test 3: C1 P1 Q2 ", () => {
  expect(
    eliminarCubiertas(C1, P1, Q2)
  ).toStrictEqual(Resultado3);
});

test("test 4: C2 P2	Q2 ", () => {
  expect(
    eliminarCubiertas(C2, P2, Q2)
  ).toStrictEqual(Resultado4);
});

test("test 5: C1 P1	Q3 ", () => {
  expect(
    eliminarCubiertas(C1, P1, Q3)
  ).toStrictEqual(Resultado5);
});

test("test 6: C2 P2	Q3 ", () => {
  expect(
    eliminarCubiertas(C2, P2, Q3)
  ).toStrictEqual(Resultado6);
});

test("test 7: C1 P1	Q4 ", () => {
  expect(
    eliminarCubiertas(C1, P1, Q4)
  ).toStrictEqual(Resultado7);
});

test("test 8: C2 P2	Q4 ", () => {
  expect(
    eliminarCubiertas(C2, P2, Q4)
  ).toStrictEqual(Resultado8);
});
