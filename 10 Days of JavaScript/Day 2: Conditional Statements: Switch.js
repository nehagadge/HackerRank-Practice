//Question : https://www.hackerrank.com/challenges/js10-switch/problem

Solution:


function getLetter(s) {
    let letter;
    letter=s.charAt(0);
    switch(s)
    {
        case {a,e,i,o,u}:
        letter='A';
        break;
        
        case {b,c,d,f,g}:
        letter='B';
        break;
        
        case {h,j,k,l,m}:
        letter='C';
        break;
        
        case {n,p,q,r,s,t,v,w,x,y,z}:
        letter="D";
        break;
    }    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
