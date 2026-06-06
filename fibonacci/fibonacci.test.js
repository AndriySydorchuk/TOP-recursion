import { fibs, fibsRec } from "./fibonacci";

describe("Fibonacci using iteration", () => {
  let input;
  let actual;
  let expected;

  test("0", () => {
    input = 0;
    actual = fibs(input);
    expected = [];

    expect(actual).toEqual(expected);
  });

  test("1", () => {
    input = 1;
    actual = fibs(input);
    expected = [0];

    expect(actual).toEqual(expected);
  });

  test("2", () => {
    input = 2;
    actual = fibs(input);
    expected = [0, 1];

    expect(actual).toEqual(expected);
  });

  test("3", () => {
    input = 3;
    actual = fibs(input);
    expected = [0, 1, 1];

    expect(actual).toEqual(expected);
  });

  test("4", () => {
    input = 4;
    actual = fibs(input);
    expected = [0, 1, 1, 2];

    expect(actual).toEqual(expected);
  });

  test("5", () => {
    input = 5;
    actual = fibs(input);
    expected = [0, 1, 1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test("6", () => {
    input = 6;
    actual = fibs(input);
    expected = [0, 1, 1, 2, 3, 5];

    expect(actual).toEqual(expected);
  });

  test("7", () => {
    input = 7;
    actual = fibs(input);
    expected = [0, 1, 1, 2, 3, 5, 8];

    expect(actual).toEqual(expected);
  });

  test("20", () => {
    input = 20;
    actual = fibs(input);
    expected = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ];

    expect(actual).toEqual(expected);
  });

  test("negative input", () => {
    input = -3;
    actual = fibs(input);
    expected = undefined;

    expect(actual).toEqual(expected);
  });

  test("non-integer input", () => {
    input = [9];
    actual = fibs(input);
    expected = undefined;

    expect(actual).toEqual(expected);
  });
});

describe("Fibonacci using recursion", () => {
  let input;
  let actual;
  let expected;

  test("0", () => {
    input = 0;
    actual = fibsRec(input);
    expected = [];

    expect(actual).toEqual(expected);
  });

  test("1", () => {
    input = 1;
    actual = fibsRec(input);
    expected = [0];

    expect(actual).toEqual(expected);
  });

  test("2", () => {
    input = 2;
    actual = fibsRec(input);
    expected = [0, 1];

    expect(actual).toEqual(expected);
  });

  test("3", () => {
    input = 3;
    actual = fibsRec(input);
    expected = [0, 1, 1];

    expect(actual).toEqual(expected);
  });

  test("4", () => {
    input = 4;
    actual = fibsRec(input);
    expected = [0, 1, 1, 2];

    expect(actual).toEqual(expected);
  });

  test("5", () => {
    input = 5;
    actual = fibsRec(input);
    expected = [0, 1, 1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test("6", () => {
    input = 6;
    actual = fibsRec(input);
    expected = [0, 1, 1, 2, 3, 5];

    expect(actual).toEqual(expected);
  });

  test("7", () => {
    input = 7;
    actual = fibsRec(input);
    expected = [0, 1, 1, 2, 3, 5, 8];

    expect(actual).toEqual(expected);
  });

  test("20", () => {
    input = 20;
    actual = fibsRec(input);
    expected = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ];

    expect(actual).toEqual(expected);
  });

  test("negative input", () => {
    input = -3;
    actual = fibsRec(input);
    expected = undefined;

    expect(actual).toEqual(expected);
  });

  test("non-integer input", () => {
    input = [9];
    actual = fibsRec(input);
    expected = undefined;

    expect(actual).toEqual(expected);
  });
});
