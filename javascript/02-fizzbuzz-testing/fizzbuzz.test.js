const fizzbuzz = require("./fizzbuzz")

describe("fizzbuzz", () => {
  test("should return 1 if input is 1", () => {
    const expected = '1'
    const result = fizzbuzz(1)
    expect(expected).toBe(result)
  })

  test("should return 'fizz' if input is divisible 3", () => {
    const expected = 'fizz'
    const result = fizzbuzz(3)
    expect(expected).toBe(result)
  })

  test("should return 'buzz' if input is divisible 5", () => {
    const expected = 'buzz'
    const result = fizzbuzz(5)
    expect(expected).toBe(result)
  })

  test("should return 'fizzbuzz' if input is divisible 3 and 5", () => {
    const expected = 'fizzbuzz'
    const result = fizzbuzz(15)
    expect(expected).toBe(result)
  })

  test("should return input if input is none of the above", () => {
    const expected = '7'
    const result = fizzbuzz(7)
    expect(expected).toBe(result)
  })
})