/* Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.
Examples: 
8=> returns true
6=> returns false*/






function isPowerOfTwo(n) {/*This function first checks if the input is less than
                            or equal to 0, in which case it returns false*/
  if (n <= 0) {
    return false;
  }                                 /*Then, it enters a loop that continues as long as n 
                          is not equal to 1. In each iteration of the loop, the function checks if n is odd. 
  If it is, then the function returns false, because a power of two can only have 0 or 1 as
   its least significant bit. If n is even, then the function divides it by 2 and continues 
   with the next iteration. If the loop completes,
   then the function returns true, because it means that n was a power of two.*/
  while (n !== 1) {

    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(6)); // false