import { mergeSort } from "./mergeSort";

describe("merge sort test.skiping", () => {
  let input;
  let actual;
  let expected;

  test("sort 1", () => {
    input = [];
    actual = mergeSort(input);
    expected = [];

    expect(actual).toEqual(expected);
  });

  test("sort 2", () => {
    input = [73];
    actual = mergeSort(input);
    expected = [73];

    expect(actual).toEqual(expected);
  });

  test("sort 3", () => {
    input = [1, 2, 3, 4, 5];
    actual = mergeSort(input);
    expected = [1, 2, 3, 4, 5];

    expect(actual).toEqual(expected);
  });

  test("sort 4", () => {
    input = [3, 2, 1, 13, 8, 5, 0, 1];
    actual = mergeSort(input);
    expected = [0, 1, 1, 2, 3, 5, 8, 13];

    expect(actual).toEqual(expected);
  });

  test("sort 5", () => {
    input = [105, 79, 100, 110];
    actual = mergeSort(input);
    expected = [79, 100, 105, 110];

    expect(actual).toEqual(expected);
  });
});
