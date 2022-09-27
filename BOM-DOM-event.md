# BOM - Browser Object Model
The Browser Object Model is a collection of features that handle e.g. browser window and communication between them. BOM is not a standard, so there are small differences between different browsers.

## [window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
Window interface means the browser window and is supported in all browsers. All global JavaScript objects, functions, and variables are automatically members of the window interface. E.g:
```javascript
window.document.querySelector('.button')
```
is the same as:
```javascript
document.querySelector('.button')
```
That is, most commands can be typed without the word `window`.

### [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
The `alert()` function opens a pop-up window with text and an OK button. This can be used to give the user a notification, for example, if an operation succeeds or fails. The program will be paused until the user presses the OK button.
```javascript
alert('Some text');
```
##### Task: Try the alert function in the browser console.

### [confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
The `confirm()` function opens a pop-up window with text and two buttons: OK and Cancel. This allows the user to be asked to accept or reject an action.
```javascript
const answer = confirm('Some question');

// printing the response to the console
console.log(answer);
```
* The response of the function is a boolean value which is store in the `answer` variable: OK = true and Cancel = false.
##### Task: Try the confirm function in the browser console.

### [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
The `prompt ()` function opens a pop-up window with a title and a text field for the user to type.
```javascript
const answer = prompt('Title', 'Initial content for the text field');

// printing the response to the console
console.log(answer);
```
* `answer` is a string in which the user's answer is stored. If the text field is empty, the value becomes _null_. The second paramater is optional. It automatically appears in the text field.

##### Task: Try the prompt function in the browser console.

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

## [document](https://developer.mozilla.org/en-US/docs/Web/API/Window/document)
Belongs to both BOM and DOM standard
More about the document object [below] ()
## [history](https://developer.mozilla.org/fi/docs/Web/API/History)
The `history` interface contains the history of the browser window, i.e. the pages visited in that browser window or tab.
```javascript
history.back(); // go back in history
history.forward(); // go forward in history
history.go(-2); // go back two steps in history
```

## [navigator-interface](https://developer.mozilla.org/en-US/docs/Web/API/navigator)
The `navigator` interface can be used to retrieve information about the browser. For example, [navigator.gelocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) palauttaa laitteen gps-koordinaatit:
```html
<!-- retrieving the user's location information and displaying it using OpenStreetMap and Leaflet.js -->
<div id="map" style="width: 100%; height: 400px;"></div>

<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
<script>
    // Options for retrieving location information (optional)
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    // A function that is called when location information is retrieved
    function success(pos) {
      const crd = pos.coords;
    
      // Printing location information to the console
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      
      // Use the leaflet.js library to show the location on the map (https://leafletjs.com/)
      const map = L.map('map').setView([crd.latitude, crd.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      L.marker([crd.latitude, crd.longitude]).addTo(map)
      .bindPopup('I am here.')
      .openPopup();
    }
    
    // Function to be called if an error occurs while retrieving location information
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    // Starts the location search
    navigator.geolocation.getCurrentPosition(success, error, options);
</script>
```
The Navigator interface also has [MediaDevices-interface](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), to use the device 's camera and / or microphone. E.g:
```html
<video autoplay></video>

<script>
    // Specify the desired video size.
    const options = { video: { width: 1280, height: 720 } };

    // A function that is run when an image is obtained from the camera
    function success(mediaStream) {
      // Select the video element
      const video = document.querySelector('video');
      // Sets the camera stream as the image source for the video element
      video.srcObject = mediaStream;
    }
    
    // Function to be called if an error occurs
    function error(err) { 
      console.warn(`ERROR(${err.name}): ${err.message}`); 
    }
    
    // Turning on the camera
    navigator.mediaDevices.getUserMedia(options).then(success).catch(error);
</script>
```

In some cases, when you want to use the latest features of JavaScript, you need to check whether the user's browser supports this. feature. Although it is possible to [sniff](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) whether it is Chrome or Internet Explorer, a better way to check if the feature works is [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection). 

## [location-interface](https://developer.mozilla.org/en-US/docs/Web/API/location)
The `location` interface tells you the address information of the document. It is usually used to redirect the browser:
```javascript
location.href = 'http://metropolia.fi'; 
```

# DOM - Document Object Model
The Document Object Model is a tree-like description of an HTML document.
![DOM](https://www.w3schools.com/js/pic_htmltree.gif)
*w3schools.com*

The HTML DOM is a standard that defines how HTML elements are selected, edited, added, and deleted. All elements are treated as objects and each element, attribute and element content (e.g. text) is called a 'node'.
```html
<html>
    <head>
        <title> Example </title>
    </head>
    <body>
        <p> Here is one paragraph </p>
        <script>
            const paragraph = document.querySelector ('p'); // selects the first p-element from the document
            console.log (paragraph.innerText); // prints the text inside the p-element to the console
        </script>
    </body>
</html>
```  
The p-element selected in the example above is stored as an element object (or element node) in a variable called 'paragraph'. The 'paragraph' object can then be manipulated using the properties and methods of the [Document] (https://developer.mozilla.org/en-US/docs/Web/API/Document) interface.

## Parent/child
![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

Because the DOM describes the document as a tree-like structure, the terms parent, child, and sibling are used in this context. For example, in the figure above, the h1 element is the child of the body element and the sibling of the a-element. Correspondingly, the body element is the parent of both the h1 and a elements.

## [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)-rajapinta
The `document` interface represents a web page, it contains all the other objects in the document. To select any HTML element from a document, you must start from the document interface. For example, `document.getElementByID('logo')`
### Key Functions and Features
```javascript
document.querySelector ('# logo') // retrieves a single element from a document using the css selector. In this case with a certain id
document.querySelectorAll ('.button') // retrieves elements from a document using the css class selector.
document.getElementById ('logo') // retrieves an element with a specific id from the document

// commands can also be aligned to the selected element:
element.getElementsByTagName ("p") // retrieves all p-elements from the selected element
element.appendChild (child) // add child node to element
element.removeChild (child) // removes the child node from the element
```
Because the Document interface inherits [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) and [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)-interfaces, in fact, the main features come from them as well as from the [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode) interface:
```javascript
elem.innerHTML // The HTML code contained in the element
elem.innerText // The text contained in the element
elem.nodeName // element type
elem.nodeValue // element value
elem.parentNode // element's parent node
elem.childNodes // element's child node
elem.children // child nodes of the element
elem.firstChild // first child node of the element
elem.lastChild // last child node of the element
elem.attributes // attributes of the element
```
### Object collections
You can also select element collections from a document:
```javascript
document.forms // retrieves all form elements
document.images // retrieves all image elements
document.links // retrieves all area and a elements with the href attribute
document.scripts // retrieves all script elements
```

## Examples

1. Select the element in the document with the id 'news' and save the element node as 'u'. Then select all p-elements from the element node 'u' and save the element list as 'p':
    ```javascript
    const u = document.getElementById('news');
    const p = u.getElementsByTagName('p');
    
    // the same can also be written without an intermediate variable
    const p = document.getElementById('news').getElementsByTagName('p');
 
    // or with a single command using the CSS selector
    const p = document.querySelectorAll('#news p');
    ```
2. Select the 2nd item (i.e. `<li>`) in the list `<ul>`:
     ```html
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
        </ul>
    ```

    ```javascript
    const second = document.getElementsByTagName('li')[1];  // getElementsByTagname returns an array. The indexes in an array start at zero, so 1 means the second <li> element.
    const second = document.querySelectorAll('li')[1];      // the same with querySelectorAll-function
    ```

3. Iterate all `<li>` elements using the forEach function and make the text bold
   ```javascript
        const bullets = document.querySelectorAll('li');
        bullets.forEach(function (bullet) {
          bullet.innerHTML = `<b>${bullet.innerHTML}</b>`;
        })
   ```

4. List of all p-elements in the "bulletin" class:
    ```javascript
    const x = document.querySelectorAll('p.bulletin');
    ```
5. Change the content of an element:
   ```html
   <p id="date"><span class="blue">Monday</span></p>
   
   <script>
   document.getElementById('date').innerHTML = '<span class="red">Tuesday</span>';
   </script>
   ```
6. Change the value of an attribute:
   ```html
   <img id="logo" src="metropolia.png"  alt="Some image">
   
   <script>
   document.getElementById('logo').src = 'laurea.png';                 // the attribute name is used as the property
   document.getElementById('logo').setAttribute('src', 'laurea.png');  // or setAttribute() function for older browsers
   </script>
   ```
7. Adding HTML to a document:
    1. using the innerHTML feature:
       ```html
       <div id="example"></div>
       
       <script>
       const div = document.querySelector('#example');          // get element whose id is 'example'
       const html =                                             // to make a multiline string, note the backtick around the string
               `<p>
                   Here is some of text with a picture.
                   <img src="http://placekitten.com/321/241" alt="Cat">
                </p>`;
       div.innerHTML = html;                                      // sets the string 'html' to the HTML content of the selected element
       </script>
       ```
    1. Same with DOM functions
       ```html
           <div id="example"></div>
           
           <script>
           const div = document.querySelector('#example');       // get element whose id is 'example'
    
           const i = document.createElement('img');                // create img element
           i.src = 'http://placekitten.com/321/241';               // set src attribute
           i.alt = 'Cat';                                        // set alt attribute
           
           const t = document.createTextNode('Here is some of text with a picture.');  // create text node
    
           const p = document.createElement('p');                  // create p element
           p.appendChild(t);                                       // add text to p element
           p.appendChild(i);                                       // add image to p element
    
           div.appendChild(p);                                     // add p element to the selected element from the HTML document
                                                                   // at this point new HTML will appear in the document.
           </script>
        ```
### CSS handling
JavaScript can also be used to customize the appearance of elements. The alternatives in this case are to either change the values of the style attribute or the class attributes, as is normally the case in HTML documents.

Editing the Style attribute i.e. inline method:

```html
<p style="background-color: #ccc; padding: 1rem;" id="paragraph">Some text</p>

<script>
document.querySelector('#paragraph').style = "color: #eee; background-color: #222; padding: 3rem;";
</script>
```
Edit the Class attribute:
```css
/* extenal css-file */
.red {
    color: #f00;
}

.blue {
    color: #00f;
}
```

```html
<p class="red" id="paragraph">Some text</p>

<script>
// Change to blue
document.querySelector('#paragraph').setAttribute('class', 'blue');
// Remove blue
document.querySelector('#paragraph').classList.toggle('blue');
// Replace blue with red
document.querySelector('#paragraph').classList.replace('red', 'blue');
</script>
```
For more methods for handling class attributes, see [classList documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

# Event handling
Because JavaScript is used to add interactivity to a website, there is a need for some way to respond to actions and events performed by the user or on the system.Tätä keinoa kutsutaan [tapahtumankäsittelyksi, englanniksi event handling.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

For example, if a user clicks a button, we can respond by displaying an information box:
```html
<button>Click me</button>
<script>
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('Element ' + evt.currentTarget.tagName + ' was clicked');
});
</script>
``` 
In the code above, the first parameter 'click' of the addEventListener method is an event, and the second parameter is the function to be called when a 'click' occurs.
The second parameter can also be a reference to a function:
```html
<button>Click me</button>
<script>
const button = document.querySelector('button');

function popup(evt){
  alert('Element ' + evt.currentTarget.tagName + ' was clicked');
}

button.addEventListener('click', popup);
</script>
``` 
Note that the popup function in addEventListener is missing parentheses This is because the popup function is used as an event handler and is not called immediately, but only when a 'click' occurs. If it had parentheses, the function would be started immediately.

The event handler is also called a callback function.

The event handler receives an [event object] (https://developer.mozilla.org/en-US/docs/Web/API/Event) (evt) that contains information about the event, such as the type of event and its target. For example, `evt.currentTarget` returns the element that is the target of the event.
In the example code above, this item is the `<button>` element.

### [List of events](https://developer.mozilla.org/en-US/docs/Web/Events)

## Syntax
Three different syntaxes can be used in event handling.

### Old (90s)
Inline syntax where the event handler is specified in the HTML code. This method should be avoided. Admittedly, some frameworks and libraries, such as Angular and React, use a syntax like this, but they are special cases.
```html
<button onclick="popup()">Click me</button>
<script>
function popup(evt){
  alert('Element' + evt.currentTarget + ' was clicked');
}
</script> 
```

### Traditional (2000s)
[Onevent properties](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers#using_onevent_properties) are a handy way to do transaction processing. They are recommended for use only in the simplest applications.

```html
<button>Click me</button>
<script>
const button = document.querySelector('button');

function popup(evt){
  alert('Element' + evt.currentTarget + ' was clicked');
}

button.onclick = popup;
</script>
```
### Modern (present)
[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) function method is recommended for most applications. It can be used to add more than one event handler to the same event, or the event can be canceled at different stages of the application as needed using the [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) function.
Such a function may be required, for example, when you want the first click of a button to perform function A and the second click to perform function B:
```html
<button>Click me</button>
<script>
    const button = document.querySelector('button');

function A(evt){
  alert('This is function A');
  nappi.removeEventListener('click', A);
  nappi.addEventListener('click', B);
}

function B(evt){
  alert('This is function B');
}

nappi.addEventListener('click', A);
</script>
```
## Stopping default action of an event
Some elements, such as `<a>` or `<form>`, have default actions for events. For example, clicking on an `<a>` element will take you to the address specified by the `href` attribute, or the` <form> `element will open the address specified in the `action` attribute when sent.
In some cases, you want to interrupt these default actions.

For example, HTML forms work by having a user fill out a form, after which they press a submit button. At this point, the browser sends the information to the address specified in the action attribute (i.e., sends an HTTP request) and at the same time opens that address in a browser window (i.e., receives an HTTP response). Modern web applications want to prevent this from happening, so you don't want to go to a new page every time you submit a form. An example is sending messages on Facebook. To stop an element's standard event, use the [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function:
```html
<form>
  <div>
    <input name="fName" type="text" placeholder="first name">
  </div>
  <div>
    <input name="lName" type="text" placeholder="last name">
  </div>
  <div>
    <input name="submit" type="submit" value="Send">
  </div>
</form>
<p></p>

<script>
// select the elements
const form = document.querySelector('form');
const fname = document.querySelector('input[name=fName]');
const lname = document.querySelector('input[name=lName]');
const submit = document.querySelector('input[name=submit]');
const p = document.querySelector('p');

// When the form is submitted...
form.addEventListener('submit', function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // Here you can check, for example, whether the fields on the form have been filled in correctly,
    // after which it could be sent using the fetch method, for example
    // However, for now, let's print the user input as an example.
    p.innerText = `Your name is ${fname.value} ${lname.value}`;
});
</script>
```

## [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
![Promise flowchart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

In newer versions of JavaScript, promise is increasingly used instead of [callback functions](#callback-functions-and-callback-hell). A promise is an object that ‘promises’ to return value.
The advantages of the promise are e.g. simpler syntax and easier error handling. For example, to submit a form using the fetch method:
```html
<form>
  <div>
    <input name="fName" type="text" placeholder="first name">
  </div>
  <div>
    <input name="lName" type="text" placeholder="last name">
  </div>
  <div>
    <input name="submit" type="submit" value="Send">
  </div>
</form>
<script>
// When the form is submitted...
document.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // create an object 'data' to which user input from the form is added and the http method is set to POST
    const data = {
        body: {
            fname: document.querySelector('input[name=fName]').value,
            lname: document.querySelector('input[name=lName]').value
        },
        method: 'POST'
    }
    // send the data
   try {
      const response = await fetch('/someAddressWhereDataIsSent', data);  // Send data to server and receive a response
      if (!response.ok) throw new Error('Invalid server input!');         // If an error occurs, an error message is thrown
      const json = await response.json();                                 // convert the loaded text JSON to a JavaScript object / array
      console.log('result', json);                                        // print the result to the console
   } catch (e) {
      console.log('error', e);
   }
});
</script>
```

### Callback functions and callback hell
_(Extra)_

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.

As an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.
```javascript
function clickaHandler() {
  console.log('The user clicked on the page.');
}
document.addEventListener('click', clickaHandler);
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
