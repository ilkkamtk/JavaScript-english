## Recursion

Recursion refers to a situation where a function calls itself, as a result of which the called function calls itself again, and so on. At some point, the deepening of the call stack ends and the recursion begins to unravel.

Consider the factorial calculation as an example of a recursive program. Factorial refers to multiplication, in which the factors of multiplication are, in addition to the number, all smaller positive integers, each at a time. For example, the factorial of the number 5 is 120.

Thus, the number 5 factorial is calculated as necessary to find out the number 4 factorial, which in turn is 4 times the number 3 factorial and so on.

Each factorial is always expressed by the factorial of an equally small number, until we finally end up with the factorial of the number 1, which is known to be one.

As a program, this can be expressed as follows:

```javascript
        function factorial(number) {
            if (number==1)
                return 1;
            else
                return number * factorial(number-1);
        }

        console.log(factorial(5));
```

Although a recursive function seems inventive, it is often not the most efficient solution. This is because the runtime environment has to store the data of missed function calls during execution. In a deep recursion, the fixed-sized portion of the main memory allocated to this call stack may run out.

# BOM

## Timing of functions
### [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
The `setTimeout ()` function can be used to call a function once after a certain time.
```javascript
function printSomething(param) {
  console.log(param);
}

setTimeout(printSomething, 2000, 'This will be printed');
```
* the above code creates a function `printSomething` that is run using the` setTimeout () `method after two seconds. The time is given in milliseconds.

### [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
The `setInterval()` function can be used to call a function at specified intervals. The `setInterval()` function returns the `interval ID`, which allows the interval to be stopped later by calling the `clearInterval ()` function
```javascript
function sayHello() {
  console.log('Hello');
}

const interval = setInterval(sayHello, 1000);
```
* the above code creates a `sayHello` function that is run every second using the` setInterval()` function. The time is given in milliseconds. To stop that interval, use the following command:
```javascript
clearInterval(interval);
```

# DOM

### Object collections
You can also select element collections from a document:
```javascript
document.forms // retrieves all form elements
document.images // retrieves all image elements
document.links // retrieves all area and a elements with the href attribute
document.scripts // retrieves all script elements
```

### Sanitize innerHTML (extra)
`innerHTML` property could be used for Cross Site Scripting attacks. [Here is an article on how to prevent it.](https://gomakethings.com/how-to-sanitize-third-party-content-with-vanilla-js-to-prevent-cross-site-scripting-xss-attacks/)

# Events

### Callback functions and callback hell

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.

As an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.
```javascript
function clickHandler() {
  console.log('The user clicked on the page.');
}
document.addEventListener('click', clickHandler);
```
#### Callback hell
Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.
```javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        getMoreData(d, function(e) {
          // ...
        })
      })
    })
  })
})
```
Refactoring the functions to return promises and using async/await can sometimes be a solution.
```javascript
async function asyncAwaitVersion() {
  const a = await getData()
  const b = await getMoreData(a)
  const c = await getMoreData(b)
  const d = await getMoreData(c)
  const e = await getMoreData(d)
  // ...
}
```

# HTTP-protocol
Most of the open APIs are implemented with the REST architecture model based on the HTTP protocol, which is why they are often referred to as RESTful web services.
The REST architecture uses HTTP methods to tell the system whether you want to read, add, or edit data, for example. In order to use open interfaces / RESTful services, it is good to know the basics of the HTTP protocol:

[Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

### HTTP methods
HTTP defines query methods that tell the server what kind of function it wants to perform.
The most commonly used methods are:

* GET
    * is usually used to request a specific resource or data
* POST
    * used to add data or even a file
* PUT
    * used to replace an old record with a new one
* DELETE
    * used to delete a record
* PATCH
    * used to update part of the record data

The documentation of the used API explains which method and which parameters and HTTP headers should be used in different situations.

# Fixing CORS errors
[In this link](https://github.com/ilkkamtk/corsfix)
