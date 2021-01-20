//Question: https://www.hackerrank.com/challenges/js10-loops/problem

Solution


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var i;
    const vowels='aeiou';
    var consonants = " ";
    for(i=0;i<s.length;i++)
    {
         if(vowels.includes(s[i]))  console.log(s[i]);
         else  consonants=consonants+s[i]+"\n";   
    }
    console.log(consonants.trim());
}
