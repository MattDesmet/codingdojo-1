//write a function that determines if a given year is a leap year
function leapYear(year){
    if (year % 4 == 0){
     console.log("its a leap year")
    }
    else if (year % 100 == 0){
         console.log("not a leap year")
     }
     else if (year % 400 == 0){
         console.log("its a leap year")
     }
     else {
         console.log("Not a leap year")
     }
 
}
leapYear(1952)