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

## [navigator-interface](https://developer.mozilla.org/en-US/docs/Web/API/navigator)
The `navigator` interface can be used to retrieve information about the browser. For example, [navigator.gelocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) returns the gps coordinates of the device:
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

## [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)-interface
The `document` interface represents a web page, it contains all the other objects in the document. To select any HTML element from a document, you must start from the document interface. For example, `document.getElementByID('logo')`
### Key Functions and Features
```javascript
document.querySelector ('#logo') // retrieves a single element from a document using the css selector. In this case with a certain id
document.querySelectorAll ('.button') // retrieves elements from a document using the css class selector.
document.getElementById ('logo') // retrieves an element with a specific id from the document

// commands can also be aligned to the selected element:
element.getElementsByTagName ("p") // retrieves all p-elements from the selected element
element.appendChild (child) // add child node to element
element.removeChild (child) // removes the child node from the element

element.innerHTML // The HTML code contained in the element
element.innerText // The text contained in the element
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

3. Iterate all `<li>` elements using the forEach function and make the text bold. ([forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) is a modern alternative to for...of)
   ```javascript
        const bullets = document.querySelectorAll('li');
        
        for (let bullet of bullets) {
            bullet.innerHTML = `<b>${bullet.innerHTML}</b>`;
        }
        
        
        // alternative syntax using array.forEach()
        /*
        bullets.forEach(function (bullet) {
          bullet.innerHTML = `<b>${bullet.innerHTML}</b>`;
        })
        */
   ```

4. List of all p-elements that have "bulletin" class:
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
                   <img src="https://via.placeholder.com/320" alt="Cat">
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
           i.src = 'https://via.placeholder.com/320';               // set src attribute
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
// Toggle red on or off
document.querySelector('#paragraph').classList.toggle('red');
// Replace blue with red
document.querySelector('#paragraph').classList.replace('red', 'blue');
</script>
```
For more methods for handling class attributes, see [classList documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

# Event handling
Because JavaScript is used to add interactivity to a website, there is a need for some way to respond to actions and events performed by the user or on the system. This method is called [event handling.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

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

The event handler is also called a [callback function](https://github.com/ilkkamtk/JavaScript-english/blob/main/extras.md#callback-functions-and-callback-hell).

The event handler receives an [event object](https://developer.mozilla.org/en-US/docs/Web/API/Event) (evt) that contains information about the event, such as the type of event and its target. For example, `evt.currentTarget` returns the element that is the target of the event.
In the example code above, this item is the `<button>` element.

### [Study this list of events](https://developer.mozilla.org/en-US/docs/Web/Events)
Most important at this point are the [mouse related events](https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events).

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
