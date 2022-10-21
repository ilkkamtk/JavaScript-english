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
5. Open `t5` folder in your IDE/editor. Create multiple `<article>` elements that contain heading, image, image catption and text and populate them with the data from `picArray`. Add the articles to the `<section>` element.
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
7. 
