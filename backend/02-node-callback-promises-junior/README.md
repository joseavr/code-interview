# JavaScript + Node.js Technical Test

Write the solutions in the `solutions/index.js` file, keeping the function names and their `export`. Use `ESModules` in your Node.js project.

1 - Fix this function so that the following code works as expected:

```javascript
import net from 'node:net'

export const ping = (ip) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    return { time: process.hrtime(startTime), ip }
  })
  
  client.on('error', (err) => {
    throw err
    client.end()
  })
}

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})
```

2 - Transform the following function so it works with promises instead of callbacks:

```javascript
export function getDataPromise(callback) {
  setTimeout(() => {
    callback(null, { data: 'important data' });
  }, 2000);
}
```

3 - Explain what the function does. Identify and fix the errors in the following code. If you see anything unnecessary, remove it. Then improve it so it still works with a callback, and finally do whatever you consider necessary to improve its readability.

```javascript
export function processFile() {
  fs.readFile('input.txt', 'utf8', (error, content) => {
    if (error) {
      console.error('Error reading file:', error.message);
      return false;
    }

    setTimeout(() => {
      const processedText = content.toUpperCase();

      fs.writeFile('output.txt', processedText, error => {
        if (error) {
          console.error('Error saving file:', error.message);
          return false;
        }

        console.log('File processed and saved successfully');
        return true
      });

    }, 1000);
  });
}
```

4 - How would you improve the following code and why? Fix the tests if necessary:

```javascript
import fs from 'node:fs';

export function readFiles() {
  const file1 = fs.readSync('file1.txt', 'utf8');
  const file2 = fs.readSync('file2.txt', 'utf8');
  const file3 = fs.readSync('file3.txt', 'utf8');

  return `${file1} ${file2} ${file3}`
}

readFiles();
```

5 - Write a `delay` function that returns a promise which resolves after `n` milliseconds. For example:

```javascript
export async function delay () {
  // ...
}

delay(3000).then(() => console.log('Hello world'));
// or..
await delay(3000)
console.log('Hello world')
```

6 - Let’s create our own `dotenv` utility in the `dotenv.js` file.

* The utility must return a `config` method that reads the `.env` file and adds the environment variables from the file to the `process.env` object.

* For example, if your `.env` file contains:

```sh
PORT=8080
TOKEN="123abc"
```

Then we could do this:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config()

console.log(process.env.PORT) // "8080"
console.log(process.env.TOKEN) // "123abc"
```

You can also pass the path of the `.env` file as a parameter:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config("./config/.env.local")
```

Things to keep in mind:

* Only the `fs` module is allowed for reading the file.
* If the file does not exist, it should not throw an error; it should simply do nothing.
* If the file exists but has no environment variables, it should also do nothing.
* It only needs to support the `.env` file or the one passed as a parameter; it doesn’t need to support `.env.local`, `.env.development`, etc. automatically.
* Environment variables are always strings, so if the `.env` file has a number like `PORT=8080`, when read with `fs` and added to `process.env`, it must be a string, not a number.
* `process.env` is an object and therefore mutable, meaning we can add new properties without issues.

7 - Design a REST API using Express that allows users to create, read, update, modify, and delete items from a list.

The list will contain objects of the following shape:

```javascript
{
  id: 1,
  content: 'Item 1'
}
```

Write the solution in the `solutions/server.js` file and export the created `app` and `server`.
Install Express with `npm install express`. Don’t worry about CORS.