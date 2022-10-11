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

## Module 3. BOM, DOM and events
