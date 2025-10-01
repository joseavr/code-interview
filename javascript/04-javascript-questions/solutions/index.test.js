import { describe, it, expect } from "vitest";
import { average, findBiggestNumber, findBiggestString, findSmallestNumber, invertString, noDuplicates, sumArray, sumTarget, truncate } from "./index";

const input = [1,2,3]

describe("testing javascript functions", () => {
  it("1. find the biggest number", () => {
    const result = 3
    expect(findBiggestNumber(input)).toBe(result);
  });

  it("2. find the smallest number", () => {
    const result = 1
    expect(findSmallestNumber(input)).toBe(result);
  });

  it("3. sum all elements in an array", () => {
    const result = 6
    expect(sumArray(input)).toBe(result)
  })

  it("4. average elements", () => {
    const result = (1+2+3)/3
    expect(average(input)).toBe(result)
  })

  it("5. invert string", () => {
    const result = "aramac"
    expect(invertString("camara")).toBe(result)
  })

  it("6. biggest string in an array", () => {
    const input = ["asdasdad", "ab", "bb"]
    const result = "asdasdad"
    expect(findBiggestString(input)).toBe(result)
  })

  it("7.1 truncate long word", () => {
    const input = "asdasdad"
    const n = 3
    const result = "asd..."
    expect(truncate(input,n)).toBe(result)
  })

  it("7.2 truncate small word", () => {
    const input = "bbb"
    const n = 2
    const result = "bb..."
    expect(truncate(input, n)).toBe(result)
  })

  it("7.2 truncate small word", () => {
    const input = "aaa"
    const n = 3
    const result = "aaa"
    expect(truncate(input, n)).toBe(result)
  })

  it("8. no duplicates in an array", () => {
    const input = [1,2,2,2,3,4]
    const result = [1,2,3,4]
    expect(noDuplicates(input)).toStrictEqual(result)
  })

  it("9. sum target", () => {
    const input = [1,2,3,6]
    const target = 7
    const result = [6,1]
    expect(sumTarget(input, target)).toStrictEqual(result)
  })
  
});