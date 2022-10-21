# Assignments
Create a folder for each module. Create one HTML- and JavaScript file for each assignment. File names should contain the assignment's number. All HTML should be valid. Submit a link that points to the module folder, not indivdual files.

You can choose which tasks you want to do. However, the maximum score for each module is 20 points. 8 points/module are required to pass.

## Module 1. Interactive programs + Conditional expressions and loops
1. Write a program that [logs to the console](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#console-log) this text: `I'm printing to console!` (1p)
2. Write a program that [prompts](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#feed-reading) for user's name and then greets the user. Print the result to [the HTML document](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#printing-into-a-web-page): `Hello, Name!` (2p)
3. Write a program that prompts for three integers. The program prints the sum, product and average of the numbers. (2p)
   * remember to [convert strings to numbers](https://github.com/ilkkamtk/JavaScript-english/blob/main/vuorovaikutteiset_ohjelmat.md#changing-the-type) when adding
4. In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are Daredevil, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)
   * Use [math.random()](https://github.com/ilkkamtk/JavaScript-english/blob/main/valinta-toistorakenteet.md#dowhile) to draw a value (1, 2, 3 or 4)
   * Once the number is drawn, you need to use a multiple choice structure ([if, else if, ..., else or switch](https://github.com/ilkkamtk/JavaScript-english/blob/main/valinta-toistorakenteet.md#conditional-expressions)).
5. Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document. (3p)
6. Write a program that prints the text "Should I calculate the square root?" in a confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document. If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)
   * The confirmation window can be displayed with the function [confirm()](https://github.com/ilkkamtk/JavaScript-english/blob/main/BOM-DOM-event.md#confirm). The function returns true if the user selects OK. If the user selects Cancel, the function returns false.
   * You cannot calculate the square root of a negative number. If the number entered by the user is negative, the program prints "The square root of a negative number is not defined" to the HTML document.
7. Write a program that asks the user for the number of dice. The program throws all the dice once and prints the sum of the numbers. (3p)
8. Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unnumbered list to the HTML document. (3p)
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
8. Write a program that asks the user for an integer and tells if the number is a prime number. Prime numbers are number that are only divisible by one or the number itself. (2p)
   * Prime numbers are numbers that are only divisible by 1 and itself.
   * For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
   * On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
   * Print the result on the HTML document
9. Make a program that initially asks the user for the number of dice and the sum of the eye numbers of interest to the user. The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user. For example, if the user enters 3 as the number of dice and 15 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 15. (4p)
   * Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
   * Print the result on the HTML document


## Module 2. Arrays and functions
1. Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
   * Save the numbers to an array, then use for-loop to iterate in reverse order. 
   * Do not use array.reverse() function.
2. Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally, the program prints the names of the participants on the web page in a numbered list (`<ol>`) in the same order as they were entered. (3p)
3. Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (3p)
4. Write a function called append(), which receives an array of strings as a parameter. The function returns a string formed by concatenating the elements of the array. (2p)
   * Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
   * Do not use array.join() function
   * You can hard code the array, no need for prompt().
5. Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (3p)
   * Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
   * Print both the original array and the new array to the console in the main program after you have called the function.
6. Write a voting program as described below for small-scale meeting use. (8p)
   * The program asks for the number of candidates. 
   * Then the program asks for the names of the candidates: `'Name for candidate 1`
   * ...and prints the candidates and initial vote count to the console:
   ```text
   {
      ellie: 0,
      frank: 0,
      pamela: 0
   }
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
   * Some help: [How to sort objects in JavaScript](https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c)

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
   * Add the following HTML code to the element with `id="target"`. Add the values from 'students' object to the `<option>` elements in a for-loop.
   ```html
   <option value="2345768">John</option>
   <option value="2134657">Paul</option>
   <option value="5423679">Jones</option>
   ```
5. Open `t5` folder in your IDE/editor. Create multiple `<article>` elements that contain heading, image, image catption and text and populate them with the data from `picArray`. Add the articles to the `<section>` element. (5p)
   * The structure of the articles should be this:
   ```html
   <article class="card">
      <h2>title_from_picArray</h2>
      <figure>
         <img src="X_from_picArray" alt="title_from_picArray">
         <figcaption>Y_from_picarray</figcaption>
      </figure>
      <p>description_from_picArray</p>
   </article>
   ```
6. Open `t6` folder in your IDE/editor. Make a script that opens an alert window that says 'Button Clicked' when the `<button>` element is clicked. (1p)
7. Open `t7` folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
   * when user mouses over `<p id="trigger">` change the picture of `<img id='target'>` form `picA.jpg` to `picB.jpg`
   * when user mouses off, change the picture back to original
8. Open `t8` folder in your IDE/editor. Make a simple calculator. (4p)
   * There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
9. Continue previous task. Remove the dropdown menu and the second text field. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (3p)
   * You can use the [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) and [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) methods as well as the [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
   * eval() function is prohibited
   * No need to support decimal numbers, calculating integers is enough.
   * Example inputs: `3+5`, `2*78`, `3/6`, etc..
11. Continue task 5. 



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
* Add a click event to the search button that launches the search.
* To search, you need to get the value of the 'q' field, which is then sent to the API using fetch.
* There are likely to be more TV series in the search result, so make a for loop for printing the HTML needed to display the data
* Data in some series may be missing, for example, the `image` object or the `officialSite` property . In this case, the value of that property is _null_. This might cause an error and the script will stop running. Try to make the script tolerant of the above errors. For example, you can use the if statement to check if the value of a variable is null, or you can use [try ... catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch), or the [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
   * You can try this with the keyword 'Dome', for example. It returns 9 TV series from the API, but one of them is missing a picture.
* Grading:
   * HTML not valid: 1p deduction for each error
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
