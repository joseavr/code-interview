// Crea una función countVowels que cuente cuántas vocales (a, e, i, o, u)
// hay en un string. Ignora mayúsculas/minúsculas.
// countVowels ("Hola Mundo"); // => 4|

function countVowels(str) {
  const allVowels = new Set(["a", "e", "i", "o", "u"])
  let count = 0

  for (i=0; i<str.length; i++) {
    if (allVowels.has(str[i].toLowerCase()))
      count++
  }
  
  return count
}

//
// test
//

console.log(countVowels("Hola Mundo"))
console.log(countVowels("I would like a cup of coffe"))