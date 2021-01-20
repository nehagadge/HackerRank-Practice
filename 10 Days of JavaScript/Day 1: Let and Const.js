Question : https://www.hackerrank.com/challenges/js10-let-and-const/problem

Solution:

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI=Math.PI;  
    var radious=readLine();  
    // Print the area of the circle:
    var area;
    area=PI*radious*radious;
    console.log(area);
    // Print the perimeter of the circle:
    var perimeter;
    perimeter=2*PI*radious;
    console.log(perimeter);
