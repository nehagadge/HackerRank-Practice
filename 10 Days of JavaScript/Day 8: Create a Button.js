//Problem: https://www.hackerrank.com/challenges/js10-create-a-button/problem

//Solution

CSS:

button {
    width: 96px;
    height: 48px;
    font-size: 24px;
}
HTML:

<!-- Enter your HTML code here -->
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
        
        <button id="btn" onclick="increment()">0</button>
        
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
JS:

function increment() {
   let x = parseInt(document.getElementById("btn").innerHTML);
   document.getElementById("btn").innerHTML= x+1;
}
