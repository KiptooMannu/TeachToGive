/*FizzBuzz
Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
"FizzBuzz".*/4


//Results Are Displayed In The Console




for (let i = 1; i <= 100; i++) {  //Iterating Numbers From 1 to 100

  if (i % 3 === 0 && i % 5 === 0) { //Using An If Statement To check if the number is A Divisor 
    console.log("FizzBuzz");      //Of 3 And 5. If A multiple of 3 And 5 it prints out FizzBuzz In The Console

  } else if (i % 3 === 0) { //If A multipe Of 3 prints Out Fizz In The Console
    console.log("Fizz");


  } else if (i % 5 === 0) {// If A multiple Of 5 Prints Out Buzz In The Console
    console.log("Buzz");


  } else {    //otherwise It Will Print The Number Itself
    console.log(i);
  }
}