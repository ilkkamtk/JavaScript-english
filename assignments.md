# Assignments
Create a folder for each module and inside each module create folder for each assignment. Create one HTML- and JavaScript file for each assignment. File names should contain the assignment's number. All HTML should be valid. Submit links that point to the module folder in users.metropolia.fi (not indivdual files) and to the GitHub repo of your JavaScript assignments.
****
### Example submission:

[Link to users.metropolia.fi](https://users.metropolia.fi/~username/folder)

[Link to GitHub](https://github.com/username/repository)

Completed assignments:

1, 2p<br>
4, 3p<br>
5, 6p

**Total 11p**

****
You can choose which assignments you want to do based on your skill level. Try to do at least about 10 points worth of assignments (so at least 40%). The more points available in the assignment, the more challenging it is. 


## Module 1. Interactive programs + Conditional expressions and loops
1. Write a program that [logs to the console](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#console-log) this text: `I'm printing to console!` (**1p**) 

2. Write a program that [prompts](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#feed-reading) for user's name and then greets the user. Print the result to [the HTML document](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#printing-into-a-web-page): `Hello, Name!` (**2p**)
3. Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to [the HTML document](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#printing-into-a-web-page). (**3p**)
   - remember to [convert strings to numbers](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#changing-the-type) when adding them together.
4. In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (**3p**)
   - Use [math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to draw a value (1, 2, 3 or 4)
   - Once the number is drawn, you need to use a multiple choice structure ([if, else if, ..., else or switch](https://github.com/ilkkamtk/JavaScript-english/blob/main/valinta-toistorakenteet.md#conditional-expressions)).
5. Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document. (**3p**)
6. Write a program that prints the text "Should I calculate the square root?" in a confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document. If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (**3p**)
   - The confirmation window can be displayed with the function [confirm()](https://github.com/ilkkamtk/JavaScript-english/blob/main/BOM-DOM-event.md#confirm). The function returns true if the user selects OK. If the user selects Cancel, the function returns false.
   - You cannot calculate the square root of a negative number. If the number entered by the user is negative, the program prints "The square root of a negative number is not defined" to the HTML document.
7. Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(**2p**)
   - First, program asks the user for the number of dice rolls. 
   - Then the program throws a die as many times as the user defined.
   - Print the sum of the results in the console or in the HTML document.
8. Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unordered list to the HTML document. (**3p**)
   - Example output HTML code:
   ```html
   <ul>
      <li>1992</li>
      <li>1996</li>
      <li>2000</li>
      <li>2004</li>
      <li>2008</li>
   </ul>
   ```
9. Write a program that asks the user for an integer and tells if the number is a prime number. (**2p**)
   - Prime numbers are numbers that are only divisible by 1 and itself.
   - For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
   - On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
   - Print the result on the HTML document.
10. Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user. The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user. For example, if the user enters 3 as the number of dice and 17 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 17. (**5p**)
    - Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
    - Print the result on the HTML document:
    ```text
    Probability to get sum 7 with 2 dice is 15.64%
    ```
    - you can limit the number of decimals with [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
    - test values:
       -  2 dice, sum 7, probability is about 15-17%
       -  3 dice, sum 15, probability is about 5%


## Module 2. Arrays and functions
1. Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(**2p**)
   - Save the numbers to an array, then use for-loop to iterate in reverse order. 
   - Do not use array.reverse() function.
2. Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally, the program prints the names of the participants on the web page in an ordered list (`<ol>`) in alphabetical order. (**2p**)
3. Write a program that asks for the names of six dogs. The program prints dog names to unordered list `<ul>` in reverse alphabetical order. (**2p**)
4. Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest. (**2p**)
5. Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (**2p**)
6. Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (`<ul>`). (**2p**)
7. Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning. (**2p**)
8. Write a function called `concat()`, which receives an array of strings as a parameter. The function returns a string formed by concatenating the elements of the array. (**2p**)
   - Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
   - Do not use `array.join()` function
   - You can hardcode the array, no need for `prompt()`.
   - Print the result to HTML document.
9. Write a function called `even()`, which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (**3p**)
   - Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
   - Print both the original array and the new array to the console in the main program after you have called the function.
   - You can hard code the array, no need for `prompt()`.
10. Write a voting program as described below for small-scale meeting use. (**8p**)
    - The program asks for the number of candidates. 
    - Then the program asks for the names of the candidates: `'Name for candidate 1`
    - Store the candidates' names and initial vote count in objects like this:
    ```javascript
    [
        {
            name: 'ellie',
            votes: 0,
        },
        {
            name: 'frank',
            votes: 0,
        },
        {
            name: 'pamela',
            votes: 0,
        },
    ]
    ```
    - The program asks for the number of voters.
    - The program asks each voter in turn who they will vote for. Voter shoud enter candidate name. If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
    - The program announces the name of the winner and the results by printing it to the console:
    ```text
    The winner is pamela with 3 votes.
    results:
    pamela: 3 votes
    frank: 1 votes
    ellie: 1 votes
    ```
    - Some help:
    ```javascript
    // You need to compare votes so console log a and b to see how to get the correct property.
    someArray.sort((a, b) => {
       console.log(a, b);
       return b - a;
    });
    ```

## Module 3. BOM, DOM and events
[Download this ZIP-file](https://github.com/ilkkamtk/module3-starters), extract it and move the content to the folder where you have your other files for this course.
1. Open `t1` folder in your IDE/editor. Add HTML by using innerHTML property (**2p**)
   - Add the following HTML code to the element with `id="target"`
   ```html
   <li>First item</li>
   <li>Second item</li>
   <li>Third item</li>
   ```
   - Add class `my-list` to the element with `id="target"`
2. Open `t2` folder in your IDE/editor. Add HTML by using `createElement()` and `appenChild` mehtods. (**2p**)
   - Add the following HTML code to the element with `id="target"`
   ```html
   <li>First item</li>
   <li>Second item</li>
   <li>Third item</li>
   ```
   - Add class `my-item` to the second list item
3. Open `t3` folder in your IDE/editor. Add HTML by using innerHTML property. (**2p**)
   - Add the following HTML code to the element with `id="target"`. Add the values from 'names' array to the `<li>` elements in a for-loop.
   ```html
   <li>John</li>
   <li>Paul</li>
   <li>Jones</li>
   ```
4. Open `t4` folder in your IDE/editor. Add HTML by using `createElement()` and `appenChild` mehtods. (**2p**)
   - Add the following HTML code to the element with `id="target"`. Add the values from 'students' array to the `<option>` elements in a for-loop.
   ```html
   <option value="2345768">John</option>
   <option value="2134657">Paul</option>
   <option value="5423679">Jones</option>
   ```
   - open Element Inspector from DevTools to see the full result. (right click, inspect...)
5. Open `t5` folder in your IDE/editor. Create multiple `<article>` elements that contain heading, image, image caption and text and populate them with the data from `picArray`. Add the articles to the `<section>` element. (**5p**)
   - The structure of the articles should be this:
   ```html
   <article class="card">
      <h2>title_from_picArray</h2>
      <figure>
         <img src="medium_image_from_picArray" alt="title_from_picArray">
         <figcaption>caption_from_picarray</figcaption>
      </figure>
      <p>description_from_picArray</p>
   </article>
   ```
6. Open `t6` folder in your IDE/editor. Make a script that opens an alert window that says 'Button Clicked' when the `<button>` element is clicked. (**1p**)
7. Open `t7` folder in your IDE/editor. Make a hover effect with JavaScript. (**2p**)
   - when user mouses over `<p id="trigger">` change the picture of `<img id="target">` form `picA.jpg` to `picB.jpg`
   - when user mouses off, change the picture back to original
8. Open `t8` folder in your IDE/editor. Make a simple calculator. (**4p**)
   - There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
   - Use the value attribute of `<option>` elements to decide which operation the calculator needs to do. [Example.](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value2)
   - Show the result in `<p id="result">` when the button is clicked.
9. Open `t9` folder in your IDE/editor. This is continuation to previous task. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (**4p**)
   - You can use the [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) and [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) methods.
   - eval() function is prohibited
   - No need to support decimal numbers, calculating integers is enough.
   - Example inputs: `3+5`, `2-78`, `3/6`, etc...
10. Open `t10` folder in your IDE/editor. Read the first name and last name values from the form and print them in the `<p id="target">` (**2p**)
    - remember to stop the default action of the form
    - you can use [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) in querySelector() to select the `<input>` elements
    - example output: `Your name is Luke Skywalker`
11. Continue task 5. Folder `t11` already exists. Follow the instructions in `t11.txt`. Modify the program to open large image in a [modal](#modal) when `<article>` is clicked. (**6p**)
    - kick yourself at this point if you used innerHTML to create the `<article>` and its content.
    - add the following html code between `</div>` and `</body>` manually to the HTML-document (no JS)
    ```html
    <dialog>
       <span>&#x2715;</span>
       <img>
    </dialog>
    ```
    - picArray has two images for each item: medium and large. Medium is used in the `<img>` inside the `<article>` and large is used in the `<img>` inside the `<dialog>`.
    - use [showModal() and close()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement#instance_methods) functions to show and hide `<dialog>`
    - the same time you are opening the modal, you should put the large image to the `<img>` in the modal. 
    - Don't forget to add `alt` attribute.
    - use `<span>` inside `<dialog>` to close the modal.
<hr>
<sub id="modal"><sup>- A modal is a dialog box/popup window that is displayed on top of the current page</sup></sub>
    

## Module 4. AJAX
1. Make an app that retrieves information about a TV series you enter and displays it in the console. (**2p**)
   - API to use: [TVMaze API](http://www.tvmaze.com/api#show-search)
   - First, make a valid HTML page with a search form. Example form:
   ```html
   <form action="https://api.tvmaze.com/search/shows">
     <input id="query" name="q" type="text">
     <input type="submit" value="Search">
   </form>
   ```
   - Test the form. The result should be a page full of JSON formatted data.
2. Develop the app further.
   - Add JavaScript that gets the value entered to the form and sends a request with [fetch](apit-ajax.md#here-is-the-same-example-but-this-time-the-airport-code-is-entered-by-using-a-form) to `https://api.tvmaze.com/search/shows?q=${value_from_input}`. Print the search result to the console. (**3p**)
3. Develop the app even further. Print the following information for all series from the search result on the web page. (**7p**)
   - required information: Name, link to details (url), medium image and summary
   - show the name in `<h2>` element
   - show the url in `<a>` element. Also add `target="_blank"` to the link.
   - show the medium image with `<img src="" alt="">`. Add medium image to `src` attribute and name property to `alt` attribute.
   - some TV-shows don't have images. This will cause an error. You can fix this by adding ? operator to `image` property. Example: `tvShow.show.image?.medium;`. This is called [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
   - show summary in `<div>` element (not `<p>`). This is because the summary is already in `<p>` element, and the result will not be valid if `<p>` is inside another `<p>`.
   - collect the elements to `<article>` elements and append `<article>` elements to the HTML document.
      - make `<div id="results">` element to the HTML document where you append the `<article>` elements.  
   - clear the old results with `innerHTML = ''` before you append the new results.
4. Develop the app even further. Optional chaining is not the best way to handle missing image. Use [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) or if/else to add a default image if TV-show is missing image property. (**2p**)
   - Use `https://via.placeholder.com/210x295?text=Not%20Found` as the default image.
5. Make an app that retrieves a random Chuck Norris joke and displays it in the console. (**2p**)
    - API to use: [chucknorris.io](https://api.chucknorris.io/)
    - Send a request to `https://api.chucknorris.io/jokes/random` and print only the joke to the console (that would be the 'value' property)
    - No need to add a form.
6. Develop the app further (**4p**).
    - Now add a form where you can enter a search term like in assignments 1-3
    - Send the search term to `https://api.chucknorris.io/jokes/search?query=${value_from_input}` using `fetch()`
    - Print each joke in this format:
    ```html
    <article>
        <p>Joke here<p>
    </article>
    ``` 
7. Advanced. Routing with [digitransit](https://digitransit.fi/en/developers/apis/1-routing-api/)  (**16p**)
   - **Not for the faint-hearted**. Don't do this if it interferes with the project. It's not worth it.
   - Create an app that shows the route from user defined address to school (Karaportti 2).
   - You need to have a form where user adds an address. After the form is submitted, the route is displayed on a map. Show also the starting and ending time of the trip. _Not_ each part, just the start and end times.
   - Example: [JS](https://github.com/ilkkamtk/JavaScript-english/blob/main/api-esimerkit/js/esim4.js), [HTML](https://github.com/ilkkamtk/JavaScript-english/blob/main/api-esimerkit/esim4.html)
      - You'll need [this Leaflet plugin](https://github.com/ilkkamtk/JavaScript-english/blob/main/api-esimerkit/js/Polyline.encoded.js) to make the example work.
   - [Here is an example](https://digitransit.fi/en/developers/apis/1-routing-api/itinerary-planning/#basic-route-from-kamppi-helsinki-to-pisa-espoo) on how to use places/addresses with coordinates.
      - To get coordinates from address, you can use [address search ](https://digitransit.fi/en/developers/apis/2-geocoding-api/address-search/)
   - If you get cors errors (which is likely _not_ going to happen) [use this fix](https://github.com/ilkkamtk/corsfix).
