# Problem 1:

Given url: https://pokeapi.co/api/v2/pokemon/ditto
Create a function usabled for any framework that fetches the prev url.
The function must catch any errors, that is, fetch should return the result otherwise error.



# Problem 2:

Given the follwing function that sum nums from 0 to `limit`, implement a solution to optimize the function calls in the case that repeats.

```javascript
const sumNumbers = (limit) => {
  let sum = 0
  
  for (let i = 0; i < limit; i++) {
      sum += 1;
  }

  return sum;
}
```
