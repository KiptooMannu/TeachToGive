
/*Question 2: Fibonacci Sequence
Write a program to generate the Fibonacci sequence up to 100.*/

//Results Are Displayed In The Console





let num1 = 0, num2 = 1, nextTerm; //Initializing the first two numbers 

  //while loop , we calculate the NextTerm(nextterm) In the sequence In Each Iteration Of While Loop
  while(num1 <= 100) {
  console.log(num1);// TheN Print The Current Term
   nextTerm = num1 + num2;    
                            //and update num1 and num2 to be the last two terms 
                            //before the next term.
   num1 = num2;
   num2 = nextTerm;
}