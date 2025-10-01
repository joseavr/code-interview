// #1
export function findBiggestNumber(array: number[]): number { 
  return Math.max(...array)
}

// #2
export function findSmallestNumber(array: number[]): number {
  return Math.min(...array)
}

// #3
export function sumArray(array: number[]): number {
  let result = 0
  for (let i=0; i < array.length; i++) {
    const element = array[i]
    result += element
  } 
  return result 
}

// #4
export function average(array: number[]) {
  const result = sumArray(array) / array.length
  return result
}

// #5
export function invertString(input: string) {
  let result = ""
  
  for (let i=input.length-1; i >= 0; i--) {
    const letter = input.at(i)
    result = result + letter
  }

  return result
}

// #6
export function findBiggestString(array: string[]): string {
  // 1. loop each item
  // 2. check item is bigger than result, if yes => store. if not continue
  let result = ""
  
  for (let i=0; i < array.length; i++) {
    const item = array[i]
    if (item.length == result.length) continue
    if (item.length > result.length) result = item
  }
  return result
}

// #7
export function truncate(input: string, n: number) {

  const result =  input.length > n ?  (input.slice(0,n) + "...") : (input.slice(0,n) + "")

  return result
}

// #8
export function noDuplicates(array: number[]): number[] {
  return Array.from(new Set(array))
}

// #9
export function sumTarget(array: number[], target: number): [number, number] | null{
  // loop each item
  // if target - item (leftover) is in `map` then return [item, leftover]
  // otherwise set map[item] = item

  const map = {}

  for (let i=0; i < array.length; i++) {
    const item = array[i]
    if (map[target-item] !== undefined ) {
      return [item, map[target-item]]  
    }

    map[item] = item
  }

  return null
}
