//Problem: https://www.hackerrank.com/challenges/js10-regexp-3/problem

//Solution:

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    return new RegExp('\\d+', 'g');
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}
