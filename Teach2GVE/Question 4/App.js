/* Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.
Examples: 
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming"*/







function capitalizeFirstLetter() {
  // Get the input value from the text field
  let inputString = document.getElementById('inputText').value;

  // Split the string into an array of words using split method
  let words = inputString.split(' ');

  // Capitalize the first letter of each word (map method)  using the toUpperCase method and then concatenating the rest of the word using the slice method
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Finally, the function joins the transformed words back into a single string using the join method.
  let resultString = capitalizedWords.join(' ');

  // Display the result in the output div
  document.getElementById('outputResult').innerText = resultString;
}