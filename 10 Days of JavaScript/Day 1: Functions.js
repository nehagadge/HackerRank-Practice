Question: https://www.hackerrank.com/challenges/js10-function/problem

Solution


/*
 * Create the function factorial here
 */
function factorial(num)
{
    if(num==0) return 1;
    else return num * factorial(num-1);
}
