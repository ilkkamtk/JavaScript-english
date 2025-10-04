# Conditional expressions

Conditional expression can be used to create alternative execution paths in a program.
Which path is selected depends on the validity of the condition written by the programmer.

In JavaScript, a Conditional expression is implemented with an if clause. For example, the following program will ask the user for age and indicate if the user is a minor based on the input:

```javascript
        const age = prompt('Enter your age.');
        if (age < 18) {
            console.log('You are a minor.');
        }
```

In the conditional statement, the word `if` is followed by a logical expression inside the parentheses. In this case it is `age < 18`.

The value of a logical expression is always `true` or` false`.

The condition is written so that its value is true exactly when the conditional part of the program is to be executed.

The conditional part of the program, i.e. the block, is delimited in brackets and indented according to established practice. In the example, the conditional part of the program contains one statement, which is a call to the `console.log ()` method.
If there is only one statement in the block, the curly brackets are not be needed.

If the condition is false, the conditional part is not executed. For example, with input 18, program execution jumps over a conditional program section.

## Comparison operators

Comparison operators are usually needed to express a condition in a conditional statement. The following comparison operators are used in JavaScript:
- equal to (`==`) or (`===`) 
- different than (`!=`)
- greater than (`>`)
- greater than or equal to (`>=`)
- less than (`<`)
- less than or equal to (`<=`)
- 
### Danger: Equality condition vs. assignment statement

Note the difference between the assignment operator (=) and the equality comparison operator (==). The following example is invalid code:
```javascript
        if (first = second) {
                console.log('Same values.')
        }
```

Assignment statement in the condition of the conditional statement usually leads to incorrect operation.
Technically, the value of the assignment statement becomes the value to be placed in the variable in the assignment statement.
The proposed numeric value is automatically converted to a boolean value so that a non-zero number is true and zero is false.

## Logical operators

Loogisia lausekkeita voidaan liittää loogisten operaattoreiden avulla.
- negation (`!`) reverses the truth value of the expression
- and `&&` requires that both sides are true
- or `||` requires that one or both parties be true.

For example, the following program indicates if the integer entered by the user is both even and greater than 10:
```javascript
        const number = prompt('Enter and integer');
        if (number % 2 === 0 && number > 10) {
            console.log('You entered an even number greater than 10');
        }
```

    ## Conditional expression of two options

In the conditional expression of the two mutually exclusive options, i.e. the `if-else` structure, an alternative block is also given, which is executed if the condition is false.

The two alternative blocks are mutually exclusive; either is always performed.

The following example indicates whether the integer entered by the user is even or odd:

```javascript
        const number = prompt('Enter an integer');
        if (number % 2 === 0) {
            console.log('You entered an even number');
        }
        else {
            console.log('You entered an odd number.');
        }
```

## Multi-option selection conditional expression

The required number of `else if` branches is appended to the conditional structure of many mutually exclusive options. During execution, the original `if` branch is moved - or if its condition is false - the first` else-if` branch whose selection condition is met. The following program comments the age of an adult user:
```javascript
        const age = prompt('Enter your age');
        if (age >= 65) {
            console.log('You are of retirement age');
        } else if (age>=30) {
            console.log('You are middle aged.');
        } else if (age>=18) {
                console.log('You are a young adult');
        }
```

Note that the value of a logical expression in each branch is calculated only when the conditions of the upper branches have already been found to be false. For example, if the user enters the age of 38, the condition of the `if` branch (age 65 and over) will not be met and the value of the condition of the upper` else if` branch will be calculated. At this point, it is sufficient to test whether the age is at least 30 years, as it is already known that it is not 65 years or more.

There is no `else` branch in the program; if the user enters the age of 17 years or less, the program will not print anything.

If you always want to end up with an outcome, write the last branch as the `else` branch. The following program indicates whether the number entered by the user is positive, negative, or zero:
```javascript
        const number = prompt('Enter a number');
        if (number > 0) {
            console.log('The number is positive.');
        }
        else if (number < 0) {
            console.log('The number is negative.');
        }
        else {
                console.log('That number is zero.');
        }
```

## Nested conditional expression

Conditional structures (like other control structures) can be nested to implement programs with complex operating logic.

As an example, consider the dosing regimen for an analgesic and write a program to determine the correct dose.

The dosing instructions are as follows:
- The dose for patients 12 years of age and older is 500 micrograms.
- The dose for patients aged 2 to 11 years is 12.5 micrograms per kilogram body weight. However, the dose should not exceed the adult dose,
- Do not give to patients under two years of age.
- 
The drug dose determination can be written as a JavaScript program as follows:
```javascript
        let age, weight, dose; // let is used because the variables are given values later
        age = prompt('Enter age of the patient.');
        if (age >= 12) {
            dose = 500;
        }
        else if (age >= 2) {
            weight = prompt('Enter the weight of the patient.');
            dose = weight * 12.5;
            if (dose > 500) {
                dose = 500;
            }
        }
        else {
            dose = 0;
        }
        console.log('The dose is ' + dose + ' micrograms.');
```
Notice the new `if` statement inside the` else-if` branch, which will only be executed if that branch is reached.

## Conditional expression of listed options (switch)

All programs that use a conditional expression can be written using the `if` conditional expression. However, the JavaScript language also provides another, `switch` conditional expression, in which branching occurs based on the value options of an expression.

For example, the following program asks the user for a ship's cabin class (A, B, or C) and prints a corresponding verbal description:

```javascript
        const cabinClass = prompt("Enter the cabin class (A/B/C).");
        switch (cabinClass) {
            case 'A':
                console.log('Top deck cabin with window.');
                break;
            case 'B':
                console.log('Top deck cabin without window.');
                break;
            case 'C':
                console.log('Windowless cabin under the car deck.');
                break;
            default:
                console.log("Invalid cabin class.");
        }
```

The expression following the word `switch` (here` class`) acts as a selector, the value of which determines which branch of execution
will end up.

Each execution branch is started with the word `case`, followed by the value of the selector and a colon. After that, the statements to be executed in the branch are written, which do not need to be assembled inside the brackets. The branch ends with a `break` statement.

The last `default` branch is always reached if the value of the user selector does not match the value in any of the` case` branches.

Each branch (except the last `default` branch) ends with a` break` statement.
The statement causes the `switch` selection structure to stop running immediately.
Without the `break` statement, execution would continue from the statements in the` case` branch immediately below, even if the value of the selector does not match.
Thus, if the `break` statement at the end of the branch corresponding to cabin A were deleted, the program would print two descriptions of cabin A:` Top deck cabin with window` and `Top deck cabin without window`.

# Loops

Thanks to the loop structure, the execution of the program part can be repeated several times.
The number of times may be known in advance or determined during execution.

JavaScript has three loop structures
- 'while' structure, where the validity of the loop condition is tested before each iteration
- a 'do / while' structure whose loop condition value is tested after each iteration
- for structure, where the repetition is usually based on the processing of the rotation variable

The structures are semantically equivalent. Any program could be written, even if only one of the above loop structures is used.
However, some loop structures are better suited to certain situations than others: the programmer can choose the one that solves the problem the easiest.

## While

In the while loop structure, the program section is repeated for as long as the playback condition written by the program remains valid.

The program below throws a coin a hundred times. Finally, the program prints how many heads and tails were obtained.

```javascript
        let heads = 0, tails = 0; // let, because the values of the variables change later
        while (heads + tails < 100) {
            const r = Math.random();
            if (r>0.5)
                heads++;
            else
                tails++;
        }
        console.log('Heads: ' + heads + ', tails: ' + tails)
```

The output of the program is as follows:
```
Heads: 53, tails: 47
```
Because the results of a coin toss are determined randomly, the result figures vary from run to run.

The while structure can be used to respond to an invalid user input and require the user to re-enter the input until it is valid. For example, the following program checks that the weight entered by the user is positive.

Execution of the program cannot proceed until the user has entered a valid weight.

```javascript
        let weight = prompt('Enter weight (kg).');
        while (weight <= 0) {
           weight = prompt('The weight must be positive. Re-enter the weight (kg).');
        }
        console.log('You entered the weight: ' + weight + ' kg.');
```

## do/while

In the do/while statement, the validity of the repetition condition is tested only when the structure is exited. The repeatable program part is therefore always executed at least once.

The following program rolls the dice and prints the resulting numbers until the dice become an eye number six:

```javascript
        let result;
        do {
           result = Math.floor(Math.random()*6)+1;
            console.log(result);
        } while (result < 6);
```
## for

For is designed for situations where the number of iterations is based on a loop variable.
Loop variable refers to a variable whose role is to keep track of the number of repetitions: the number is initially zero and is incremented by one at the end of each repetition.
At some point, the value of the loop variable becomes so large that repetition ends. The loop condition that defines it is programmed into the for statement.

The following example prints numbers from one to ten:
```javascript
        for (let i = 1; i <= 10 ; i++) {
            console.log(i);
        }
```
The example shows that there are three parts separated by semicolons between the parentheses after the word for:
- Initial steps (`i = 1`)
- loop condition (`i <= 10`)
- final steps (`i++`)

The execution of the loop proceeds in the following order:
1. The initial steps are taken once upon entry into the structure.
2. The value of the loop condition (true or false) is specified.
   - If the value is `true`, the block to be played is executed.
   - If the value is `false`, exits the loop structure
3. Complete the final steps and return to step 2.

For example, the following program asks the user for a number and prints all even integers from zero to the number entered by the user:
```javascript
        const number = prompt('Enter the upper limit for even numbers.');
        for (let i = 0; i <= number ; i += 2) {
            console.log(i);
        }
```
You can emulate while-loop with for by creating an infinite loop and then stopping it with `break`:
```javascript
// ask for a name, stop when user enters empty value
for (;;) {
  const name = prompt('Enter a name');
  if (name === '') {
    break;
  }
  console.log(name);
}
```
   - You can do this, but it is not recommended. Use an actual while loop instead.

## Nested loop structures

Sometimes it is necessary to produce value combinations of two or more variables: for example, when printing a multiplication table of numbers from one to five, the first multiplication factor must obtain all integer values from one to five and the second multiplication factor as well.

A problem like this can be solved with two nested loop structures:

```javascript
        let multiplication;
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 5; j++) {
               multiplication = i * j;
                console.log(i + ' times ' + j + ' is ' + multiplication + ".");
            }
        }
```
Note the use of two loop variables (`i` and` j`). In the outer loop structure, the loop variable `i` gets the value one in the first round, after which the loop variable in the inner loop structure goes through all the values from one to five.
Thereafter, the loop variable of the outer loop structure increases to two, and the inner loop structure is again reviewed in its entirety. This is continued until the loop variable of the outer structure finally increases to six, at which point its loop condition has become untrue.

The program produces the following output:
```
1 times 1 is 1.
1 times 2 is 2.
1 times 3 is 3.
1 times 4 is 4.
1 times 5 is 5.
2 times 1 is 2.
2 times 2 is 4.
...
5 times 5 is 25.
```
