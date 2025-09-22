// Create a function isPalindrome that takes a string and returns true if the string is a palindrome.
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
// For example, madam is a palindrome, but not dada.

//
// solution
//
// we will iterate with two pointers: 1 at the beginning, 1 at the end
// iterating each other till they meet
// checking they are the same, if not return false

function isPalindrome(str) {
  // a new string with no spaces and uppercases
  const formattedString = str.toLowerCase().split(" ").join("")
  let start = 0
  let end = str.length-1
  
  for (let i=0; i<str.length/2; i++) {
    if (formattedString[start] !== formattedString[end])
      return false

    start++
    end--
  }

  return true
}