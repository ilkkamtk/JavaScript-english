# Assignments
Create a folder for each module. Create one HTML- and JavaScript file for each assignment. File names should contain the assignment's number. All HTML should be valid. Submit a link that points to the module folder, not indivdual files.

You can choose which tasks you want to do. However, the maximum score for each module is 20 points. 8 points/module are required to pass.

## Module 1. Interactive programs + Conditional expressions and loops
1. Write a program that [logs to the console](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#console-log) this text: `I'm printing to console!` (1p)
2. Write a program that [prompts](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#feed-reading) for user's name and then greets the user. Print the result to [the HTML document](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#printing-into-a-web-page): `Hello, Name!` (2p)
3. Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to [the HTML document](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#printing-into-a-web-page). (3p)
   * remember to [convert strings to numbers](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#changing-the-type) when adding
4. In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are Daredevil, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)
   * Use [math.random()](https://github.com/ilkkamtk/JavaScript-english/blob/main/valinta-toistorakenteet.md#dowhile) to draw a value (1, 2, 3 or 4)
   * Once the number is drawn, you need to use a multiple choice structure ([if, else if, ..., else or switch](https://github.com/ilkkamtk/JavaScript-english/blob/main/valinta-toistorakenteet.md#conditional-expressions)).
5. Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document. (3p)
6. Write a program that prints the text "Should I calculate the square root?" in a confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document. If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)
   * The confirmation window can be displayed with the function [confirm()](https://github.com/ilkkamtk/JavaScript-english/blob/main/BOM-DOM-event.md#confirm). The function returns true if the user selects OK. If the user selects Cancel, the function returns false.
   * You cannot calculate the square root of a negative number. If the number entered by the user is negative, the program prints "The square root of a negative number is not defined" to the HTML document.
7. Write a program that asks the user for the number of dice. The program throws all the dice once and prints the sum of the numbers. (2p)
8. Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unordered list to the HTML document. (3p)
   * Example output HTML code:
   ```html
   <ul>
      <li>1992</li>
      <li>1996</li>
      <li>2000</li>
      <li>2004</li>
      <li>2008</li>
   </ul>
   ```
9. Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
   * Prime numbers are numbers that are only divisible by 1 and itself.
   * For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
   * On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
   * Print the result on the HTML document.
10. Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user. The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user. For example, if the user enters 3 as the number of dice and 15 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 15. (5p)
    * Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
    * Print the result on the HTML document:
    ```text
    Probability to get sum 7 with 2 dice is 15.64%
    ```
    * you can limit the number of decimals with [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
    * test values:
       *  2 dice, sum 7, probability is about 15-17%
       *  3 dice, sum 15, probability is about 5%


## Module 2. Arrays and functions
1. Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
   * Save the numbers to an array, then use for-loop to iterate in reverse order. 
   * Do not use array.reverse() function.
2. Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally, the program prints the names of the participants on the web page in an ordered list (`<ol>`) in the same order as they were entered. (2p)
3. Write a program that asks for the names of six dogs. The program prints dog names to unordered list `<ul>` in reverse alphabetical order. (2p)
4. Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest. (2p)
5. Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)
6. Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (`<ul>`). (2p)
7. Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)
8. Write a function called `concat()`, which receives an array of strings as a parameter. The function returns a string formed by concatenating the elements of the array. (2p)
   * Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
   * Do not use `array.join()` function
   * You can hardcode the array, no need for `prompt()`.
   * Print the result to HTML document.
9. Write a function called `even()`, which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (3p)
   * Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
   * Print both the original array and the new array to the console in the main program after you have called the function.
   * You can hardcode the array, no need for `prompt()`.
10. Write a voting program as described below for small-scale meeting use. (8p)
    * The program asks for the number of candidates. 
    * Then the program asks for the names of the candidates: `'Name for candidate 1`
    * Store the candidates' names and initial vote count in objects like this:
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
    * The program asks for the number of voters.
    * The program asks each voter in turn who they will vote for. Voter shoud enter candidate name. If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
    * The program announces the name of the winner and the results by printing it to the console:
    ```text
    The winner is pamela by 4 votes.
    results:
    pamela: 3 votes
    frank: 1 votes
    ellie: 1 votes
    ```
    * Some help:
    ```javascript
    // You need to compare votes so console log a and b to see how to get the correct property.
    someArray.sort((a, b) => {
       console.log(a, b);
       return b - a;
    });
    ```

## Module 3. BOM, DOM and events
Download this ZIP-file, extract it and move the content to the folder where you have your other files for this course.
1. Open `t1` folder in your IDE/editor. Add HTML by using innerHTML property (2p)
   * Add the following HTML code to the element with `id="target"`
   ```html
   <li>First item</li>
   <li>Second item</li>
   <li>Third item</li>
   ```
   * Add class `my-list` to the element with `id="target"`
2. Open `t2` folder in your IDE/editor. Add HTML by using `createElement()` and `appenChild` mehtods. (2p)
   * Add the following HTML code to the element with `id="target"`
   ```html
   <li>First item</li>
   <li>Second item</li>
   <li>Third item</li>
   ```
   * Add class `my-item` to the second list item
3. Open `t3` folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
   * Add the following HTML code to the element with `id="target"`. Add the values from 'names' array to the `<li>` elements in a for-loop.
   ```html
   <li>John</li>
   <li>Paul</li>
   <li>Jones</li>
   ```
4. Open `t4` folder in your IDE/editor. Add HTML by using `createElement()` and `appenChild` mehtods. (2p)
   * Add the following HTML code to the element with `id="target"`. Add the values from 'students' array to the `<option>` elements in a for-loop.
   ```html
   <option value="2345768">John</option>
   <option value="2134657">Paul</option>
   <option value="5423679">Jones</option>
   ```
   * open Element Inspector from DevTools to see the full result. (right click, inspect...)
5. Open `t5` folder in your IDE/editor. Create multiple `<article>` elements that contain heading, image, image caption and text and populate them with the data from `picArray`. Add the articles to the `<section>` element. (5p)
   * The structure of the articles should be this:
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
6. Open `t6` folder in your IDE/editor. Make a script that opens an alert window that says 'Button Clicked' when the `<button>` element is clicked. (1p)
7. Open `t7` folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
   * when user mouses over `<p id="trigger">` change the picture of `<img id="target">` form `picA.jpg` to `picB.jpg`
   * when user mouses off, change the picture back to original
8. Open `t8` folder in your IDE/editor. Make a simple calculator. (4p)
   * There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
   * Use the value attribute of `<option>` elements to decide which operation the calculator needs to do. [Example.](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value2)
   * Show the result in `<p id="result">` when the button is clicked.
9. Open `t9` folder in your IDE/editor. This is continuation to previous task. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
   * You can use the [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) and [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) methods.
   * eval() function is prohibited
   * No need to support decimal numbers, calculating integers is enough.
   * Example inputs: `3+5`, `2*78`, `3/6`, etc..
10. Open `t10` folder in your IDE/editor. Read the first name and last name values from the form and print them in the `<p id="target">` (2p)
    * remember to stop the default action of the form
    * you can use [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) in querySelector() to select the `<input>` elements
    * example output: `Your name is Luke Skywalker`
11. Continue task 5. Open large image in a [modal](#modal) when `<article>` is clicked. (6p)
    * kick yourself at this point if you used innerHTML to create the `<article>` and its content.
    * add the following html code between `</div>` and `</body>`
    ```html
    <dialog>
       <span>&#x2715;</span>
       <img>
    </dialog>
    ```
    * picArray has two images for each item: medium and large. Medium is used in the `<img>` inside the `<article>` and large is used in the `<img>` inside the `<dialog>`.
    * use [showModal() and close()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement#instance_methods) functions to show and hide `<dialog>`
    * the same time you are opening the modal, you should put the large image to the `<img>` in the modal. 
    * Don't forget to add `alt` attribute.
    * use `<span>` inside `<dialog>` to close the modal.
<hr>
<sub id="modal"><sup>* A modal is a dialog box/popup window that is displayed on top of the current page</sup></sub>

## Module 4. AJAX
Make an app that retrieves information about a TV series you enter and displays it on a web page.
* API to use: [TVMaze API](http://www.tvmaze.com/api#show-search)
* Requirements:
   * Step 1: Print the search result to the console (3p)
   * Step 2: Print one set of search results on a web page (4p)
      * required information: Name, link to home page (officialSite), medium image and summary
      * add the link to `<a>` element
   * Step 3: Print the same information for all series from the search result on the web page as above (7p)
      * in addition, the genres to which the series belongs are printed
         * use `|` character (or similar, but no comma) to separate the genres
      * if TV series has no image, use default image
         * example default image: https://via.placeholder.com/100x200?text=text+here
      * if TV series has no officialSite, use url
      * you can comment out steps 1 and 2 at this point
   * Step 4: Stylish layout with CSS and valid HTML (6p)
      * you'll probably need at least 5-10 CSS rules to make a proper layout
* First, make a valid HTML page with a search form. Example form:
```html
<form action="https://api.tvmaze.com/search/shows">
    <input id="query" name="q" type="text">
    <input type="submit" value="Search">
</form>
```
* Test the form. The result should be a page full of JSON formatted data.
* Add JavaScript file.
* Add a submit event to the form to launch the search.
* To search, you need to get the value of the 'q' field, which is then sent to the API using fetch.
* There are likely to be multiple TV series in the search result, so make a for loop for printing the HTML needed to display the data
* Data in some series may be missing, for example, the `image` object or the `officialSite` property. In that case, the value of that property is _null_. This might cause an error and the script will stop running. Try to make the script tolerant of the above errors. For example, you can use the if statement to check if the value of a variable is null, or you can use [try ... catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), or the [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
   * You can try this with the keyword 'dome', for example. It returns 10 TV series from the API, but e.g. show called 'Battle Dome' is missing `image` and `officialSite`.
* Grading:
   * HTML not valid: 1p deduction for each error (warnings are not errors)
   * Default font: 1p deduction
   * Bad contrast (poor choise of colors): 1 - 2p deduction
   * No padding, margin, hard to read: 1p deduction for each
   * No error handling (all results are not displayed): 4p deduction
   * Missing information: 1p deduction for each
   * No default image: 2p deduction
   * Links not working: 1p deduction
   * Search results are not cleared when a new search is made: 1p deduction
   * Comma `,` between genres: 1p deduction
   * Search form is not styled: 1-2p deduction
