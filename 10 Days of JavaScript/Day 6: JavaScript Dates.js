//Problem: https://www.hackerrank.com/challenges/js10-date/problem

//Solution:

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    let d = dateString;

switch (new Date(d).getDay()) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";

}

    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}
