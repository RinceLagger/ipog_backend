const combinacionesCubiertas = require("./combinacionesCubiertas");

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

test("test 1: C1 P2	Q1 ", () => {
  expect(
    combinacionesCubiertas(C1,P2,Q1)
  ).toBe(2);
});

test("test 2: C1 P1 Q1 ", () => {
  expect(
    combinacionesCubiertas(C1, P1, Q1)
  ).toBe(2);
});

test("test 3: C1 P1 Q2 ", () => {
  expect(
    combinacionesCubiertas(C1, P1, Q2)
  ).toBe(2);
});

test("test 4: C2 P2	Q2 ", () => {
  expect(
    combinacionesCubiertas(C2, P2, Q2)
  ).toBe(2);
});

test("test 5: C1 P1	Q3 ", () => {
  expect(
    combinacionesCubiertas(C1, P1, Q3)
  ).toBe(0);
});

test("test 6: C2 P2	Q3 ", () => {
  expect(
    combinacionesCubiertas(C2, P2, Q3)
  ).toBe(1);
});

test("test 7: C1 P1	Q4 ", () => {
  expect(
    combinacionesCubiertas(C1, P1, Q4)
  ).toBe(1);
});

test("test 8: C2 P2	Q4 ", () => {
  expect(
    combinacionesCubiertas(C2, P2, Q4)
  ).toBe(2);
});
