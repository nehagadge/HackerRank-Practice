//Question: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

Solution




/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
     
  try{
    // Can be chained, but it damages readability
    console.log(s.split("").reverse().join("")) 
  }
  catch(e){
    console.log(e.message); // Use .message, or you'll get more than expected.
    console.log(s);
  }

}
