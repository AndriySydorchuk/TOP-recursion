import { mergeSort } from "./mergeSort";

describe("merge sort", () => {
  let input;
  let actual;
  let expected;

  test("returns empty array for []", () => {
    input = [];
    actual = mergeSort(input);
    expected = [];

    expect(actual).toEqual(expected);
  });

  test("returns same array for single item array", () => {
    input = [73];
    actual = mergeSort(input);
    expected = [73];

    expect(actual).toEqual(expected);
  });

  test("returns sorted array for already sorted", () => {
    input = [1, 2, 3, 4, 5];
    actual = mergeSort(input);
    expected = [1, 2, 3, 4, 5];

    expect(actual).toEqual(expected);
  });

  test("returns sorted array", () => {
    input = [3, 2, 1, 13, 8, 5, 0, 1];
    actual = mergeSort(input);
    expected = [0, 1, 1, 2, 3, 5, 8, 13];

    expect(actual).toEqual(expected);
  });

  test("returns sorted array", () => {
    input = [105, 79, 100, 110];
    actual = mergeSort(input);
    expected = [79, 100, 105, 110];

    expect(actual).toEqual(expected);
  });

  test("returns sorted array for unsorted with negative integers", () => {
    input = [-3, 10, 0, -1];
    actual = mergeSort(input);
    expected = [-3, -1, 0, 10];

    expect(actual).toEqual(expected);
  });

  test("returns sorted array for same integers array", () => {
    input = [5, 5, 5];
    actual = mergeSort(input);
    expected = [5, 5, 5];

    expect(actual).toEqual(expected);
  });

  test("returns sorted array for array with same integers", () => {
    input = [9, 1, 9, 3, 0, -5];
    actual = mergeSort(input);
    expected = [-5, 0, 1, 3, 9, 9];

    expect(actual).toEqual(expected);
  });
});
