### Week 1 (Interactive programs, Conditional expressions and loops, Arrays and functions)
1. Write a program that prompts the user for three integer numbers. The program logs the sum, product, and average of the numbers to the console. (2p)
2. In the Monopoly game, the player rolls two dice and advances by the sum of the eye numbers. Write a program that draws two numbers on a dice. The program prints the drawn numbers to the console, as well as the sum of the numbers. (3p)
   * Example output:
   ```text
   First dice: 1, second dice: 6
   Sum: 7
   ```
   * hints: [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
3. In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of four houses, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a house for that student. If the user enters Anna as the name, for example, the program announces, for example, "Anna, you are Ravenclaw."
   * Print the result with `alert()`
4. Write a program that prints the text "Should we calculate the square root?" in the confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root. If the user selects Cancel, the program prints the text "The square root is not calculated." (4p)
   * The confirmation window can be displayed with the function `confirm()`. The function returns true if the user selects OK. If the user selects Cancel, the function returns false.
   * You cannot calculate the square root of a negative number. If the number entered by the user is negative, the program prints "The square root of a negative number is not defined".
   * Use `console.log()` to print the square root result and `console.error()` to print the cancel and negative number outputs.
5. Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. You can choose the printing method yourself. (3p)
6. 
