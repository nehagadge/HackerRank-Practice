//Problem: https://www.hackerrank.com/challenges/js10-regexp-2/problem

//Solution

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    
    /*
     * Do not remove the return statement
     */
    const re = /^(Mr?s|[MDE]r)\.[A-Za-z]+$/;
    return re;
}
function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}
