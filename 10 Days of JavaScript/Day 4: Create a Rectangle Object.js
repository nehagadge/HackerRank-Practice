//Question : https://www.hackerrank.com/challenges/js10-objects/problem

//Solution:


/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
        get length(){ return a; },
        get width(){ return b; },
        get area(){ return a*b; },
        get perimeter(){ return 2*(a+b); }
    }
}
