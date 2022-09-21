# Open application programming interfaces
## Application programming interface, API
Application programming interface is a definition according to which different programs can make requests and exchange information, i.e. talk to each other.
The API is kind of an interpreter between two different systems. For example, the JavaScript [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) retrieves device location information from the operating system and translates it into a format suitable for JavaScript.

## Open application programming interface
[Watch this video](https://www.youtube.com/watch?v=dStT9v5y6Tc)

The open application programming interface is a kind of data warehouse that can be read over the Internet. The open application programming interface can be a data-only interface that can only read data (e.g. [OpenWeatherMap](https://openweathermap.org/current)) or a functional interface that can also be used to store and edit data (e.g. [Open311](http://dev.hel.fi/apis/open311/)).
* [List of open application programming interfaces](https://www.programmableweb.com/category)
* [List of Finnish open application programming interfaces](https://www.avoindata.fi/fi)

Open application programming interfaces are plentiful and most of them are well documented today. Many of the interfaces require some form of registration before they can be used. In addition, they can be tested before implementation.

A very handy tool for testing is [Postman](https://www.postman.com/downloads/). It allows interfaces on the Internet to be tested without writing a single line of code.

## HTTP-protocol
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

### An example application that uses the OpenChargeMap interface
- [Source code](https://github.com/ilkkamtk/sahkoauto)
- [Link to the app](https://users.metropolia.fi/~ilkkamtk/sahkoauto/)

### More examples, e.g. for the project
- [Link](api-esimerkit/README.md)

# AJAX - Asynchronous JavaScript and XML
## A typical AJAX application
Because the Ajax application dynamically modifies Web pages without the user having to navigate from one page to another, the operation of the Web application can be made to resemble that of standard desktop programs, such as Google Docs. Facebook is also a good example of an AJAX app.

### A = Asynchronous
Because the execution environment of JavaScript is single-threaded, time-consuming operations cannot be waited synchronously, i.e., so that a single thread waits for the execution of the call, in which case the program does nothing else.
For this reason, in JavaScript, many things, such as AJAX calls and file processing, are done asynchronously.

#### Asynchronous AJAX-request
```html
<img>

<script>
    console.log('the script starts');

    function synchronousFunction() {
      let number = 1;
      for(let i = 1; i < 10000; i++){
        number *= i;
        console.log('regular function complete', number);
      }
    }

    async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
        console.log('asynchronous download begins');
        try {                                               // error handling: try/catch/finally
            const response = await fetch('someAddress');    // starting data download, fetch returns an object of type 'response'
            const picData = await response.text();          // retrieving the textual data retrieved from the response object using the text() function
            document.querySelector('img').src = picData;    // sets the value of the src attribute of the <img> element to the loaded content, which in this case is an image in dataURL format
        } catch (error) {
            console.log(error.message);
        } finally {                                         // finally = suoritetaan joka tapauksessa, oli suoritus onnistut tai ei
            console.log('asynchronous download complete');
        }
    };

    synchronousFunction();
    asynchronousFunction();

    console.log('the script ends');
</script>
```
##### Task: Try the script above. Set address to https://raw.githubusercontent.com/ilkkamtk/WebTechnologiesAndDigitalMedia/master/JavaScript/img/dataUrlExample.txt
The code should log to the console:
```text
the script starts
regular function complete 999999999
asynchronous download begins
the script ends
asynchronous download complete
```
Also look at the Network tab in the developer tools and reload the page. You will notice that the load of dataUrlExample.txt will not begin until the standard function is complete.

## J = JavaScript
In AJAX, JavaScript is used to display downloaded data in an HTML document.

## X = XML, eXtensible Markup Language
XML is a markup language, like HTML. It is intended for storing and transferring data. A typical XML document looks like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<images>
    <picture>
        <name> Sleeping cat </name>
        <description> In this picture, the cat is sleeping. </description>
        <address> http://placekitten.com/321/241 </address>
    </ picture>
    <picture>
        <name> Lying cat </name>
        <Description> In this picture, the cat is lying. </Description>
        <address> http://placekitten.com/421/251 </address>
    </ picture>
</images>
```
Around the mid-2000s, when AJAX functionality was added to JavaScript, XML was a natural alternative to use for data transfer.
Creating XML documents on a server, and especially reading / parsing them on the client end with JavaScript, is reasonably cumbersome compared to current technologies.

## [JSON](http://json.org), JavaScript Object Notation
JSON, or JavaScript Object Notation, is a popular markup language commonly used for communication between browsers and servers, and especially in Ajax applications. Today, Ajax applications mostly use JSON instead of XML. Although JSON uses JavaScript data structures to represent data, it is still compatible with other languages. Using JSON in both server and browser programming is usually much simpler than XML. E.g:

```json
[
  {
    "name": "Sleeping cat",
    "description": "In this picture the cat is sleeping.",
    "address": "http://placekitten.com/321/241"
  },
  {
    "name": "Sleeping cat",
    "description": "In this picture the cat is lying.",
    "address": "http://placekitten.com/421/251"
  }
]
```
The example above describes an array (square brackets []) that contains two objects (braces {}). In this example, the data of the second picture is retrieved and displayed in an HTML document:
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>
        // simplified example without error handling
        async function showPics() {
            const response = await fetch('pics.json');              // starts the download.
            const images = await response.json();                     // convert the loaded text JSON into a JavaScript object / array
            
            const name = images[1].name;     // the 'name' property of the second object in the 'images' array
            const description = images[1].description; // 'description' property of the second object object in the 'images' array
            const address = images[1].address; // 'address' property of the second object object in the 'images' array
    
            document.querySelector('img').src = address;
            document.querySelector('img').alt = name;
            document.querySelector('figcaption').innerText = description;
            
        }

        showPics(); // call function to start download
</script>
```

## [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
Fetch is a promise-based way to make Ajax applications. Compared to the original [XMLHTTPRequest object](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), Fetch is more powerful, more flexible, and simpler in larger applications because it does not have to deal with so-called callback hell and handling errors is easier. Same image search example as before, now implemented with the older syntax of fetch() function:
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>
    
    fetch('pics.json')              // The download is started. The default method is GET.
    .then(function(response){       // When the download is complete,
      return response.json();       // convert the loaded text JSON to a JavaScript object / array
    }).then(function(json){         // Then the downloaded data is received and
      showPics(json);               // call the showPics function and send the loaded data to it as an argument.
    }).catch(function(error){       // If an error occurs,
      console.log(error);           // log the error to the console.
    });                
    
    function showPics(images) {
        const name = images[1].name;     // the 'name' property of the second object in the 'images' array
        const description = images[1].description; // 'description' property of the second object object in the 'images' array
        const address = images[1].address; // 'address' property of the second object object in the 'images' array

        document.querySelector('img').src = address;
        document.querySelector('img').alt = name;
        document.querySelector('figcaption').innerText = description;
     }
</script>
```
The ES8 version of JavaScript introduced the syntax of [async / await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to simplify the use of promises and especially error handling. With Async / await syntax, functions that return a promise are handled in much the same way as any other function. The difference is that the function that returns the promise must be written inside another asynchronous (async) function. In addition, await is written in front of the function call. Here's the above example using async / await syntax, but now with [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) error handling.
```html
<figure>
    <img>
    <figcaption></figcaption>
</figure>

<script>   
    async function showPics() {  
        try{
           const response = await fetch('pics.json');              // The download is started.
           if (!response.ok) throw new Error('Invalid server input!'); // If an error occurs, an error message is thrown
           const images = await response.json();                     // convert the loaded text JSON to a JavaScript object / array
           const name = images[1].name;     // the 'name' property of the second object in the 'images' array
           const description = images[1].description; // 'description' property of the second object object in the 'images' array
           const address = images[1].address; // 'address' property of the second object object in the 'images' array

           document.querySelector('img').src = address;
           document.querySelector('img').alt = name;
           document.querySelector('figcaption').innerText = description;
        } catch (error) {                                          // catch the thrown error message
          console.log(error.message)
        }                  
     }

    showPics();
</script>
```

## Assignment
Make an app that retrieves information about a TV series you enter and displays it on a web page.
* API to use: [TVMaze API](http://www.tvmaze.com/api#show-search)
* Requirements:
    * Step 1: Print the search result to the console (3p)
    * Step 2: Print one set of search results on a web page (4p)
        * required information: Name, link to home page (officialSite), medium image and summary
    * Step 3: Print the same information for all series from the search result on the web page as above (7p)
        * in addition, the genres to which the series belongs are printed
    * Step 4: Stylish layout with CSS and valid HTML (6p)
* First, make a valid HTML page with a search box. Example html for the form/search box: `<input id="query" type="text">` and `<button id ="searchButton">Search</button>`
* Add a click event to the search button that launches the search.
* To search, you need to get the value of the 'query' field, which is then sent to the API using fetch.
* There are likely to be more TV series in the search result, so make a for loop for printing the HTML needed to display the data
* Data in some series may be missing, for example, an image. In this case, the value of that field is _null_. This will cause an error message and the script will stop running. Try to make the script tolerant of the above errors. For example, you can use the if statement to check if the value of a variable is null, or you can use [try ... catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
    * You can try this with the keyword 'Dome', for example. It returns 9 TV series from the API, but one of them is missing a picture.
* Grading:
  * HTML not valid: 1p deduction for each error
  * Default font: 1p deduction
  * Bad contrast (poor choise of colors): 1 - 2p deduction
  * No padding, margin, hard to read: 1p deduction for each
  * No error handling (all results are not displayed): 4p deduction
  * Missing information: 1p deduction for each
