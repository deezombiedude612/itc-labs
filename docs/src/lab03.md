---
title: "Practical 03"
editlink: true
navbar: true
---

# Practical 03: Loop Statements

Loop structures make up the remaining part of program control structures.
We will be implementing loop structures (i.e., for loop, while loop, do-while loop) in this practical.

## Getting Started

## Activity: for Loops vs. while Loops vs. do-while Loops

The following shows a for loop which iterates from 0 to 7, adding each iterated number into a variable called `sum`.

```c
int i;
int sum = 0;

for (i = 0; i <= 7; i++) {
	sum = sum + i;
}
```

1. Add a line within the loop to print out the value of `sum` during each iteration.

2. Convert the given for loop into a while loop and do-while loop. Is there a difference in terms of output between these two loop types?

3. Convert the following for loop into a while loop and do-while loop. Is there a difference in terms of output between these two loop types?

```c
int i;
int sum = 0;

for (int i = 7; i < 7; i++) {
	sum = sum + i;
	printf("Value of sum: %d\n", sum);
}
```

## Tasks

### Task 1

Write a program that calculates and prints the sum of all even integers between 2 and 30 (inclusive of both).

### Task 2

Write a program that sums up a sequence of integers.
The program should first prompt the user for the number of integers to be summed up.
After that, the program should proceed to read all the integers to be summed up.
Your program should read only one value each time the `scanf` function is executed.

A typical input sequence might be:

5 100 200 300 400 500

where the first integer (i.e., 5) directs the program to sum up 5 consequently entered integer values.

### Task 3

Develop a C program that will determine if a department store customer has exceeded the credit limit on a charge account.
For each customer, the following information is made available:

- account number
- balance at the beginning of the month
- total of all items charged by this customer this month
- total of all credits applied to this customer's account this month
- allowed credit limit

The program should prompt for each of the listed information, and calculate the new balance
(i.e., beginning balance + charges - credits)
and determine if the new balance exceeds the customer's credit limit.
For those customers whose credit limit is exceeded, the program should display the customer's account number, credit limit, new balance, and the message: "Credit limit exceeded."

Sample output:

```
Enter account number (-1 to end): 100
Enter beginning balance: 5394.78
Enter total charges: 1000.00
Enter total credits: 500.00
Enter credit limit: 5500.00
Account:		100
Credit limit:	5500.00
Balance:		5894.78
Credit limit exceeded.

Enter account number (-1 to end): 200
Enter beginning balance: 1000.00
Enter total charges: 123.45
Enter total credits: 321.00
Enter credit limit: 1500.00

Enter account number (-1 to end): 300
Enter beginning balance: 500.00
Enter total charges: 274.73
Enter total credits: 100.00
Enter credit limit: 800.00

Enter account number (-1 to end): -1

```
