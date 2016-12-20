// I did this assignment two ways with 24 hour clock and 12 hour clock, I wasn't sure which would be preferred for this assignment

function time(hour, min, period) {

  if (hour < 13 && min < 61 && period == "am" || period == "pm") {
    // note to self: first time i did this i accidentally assigned period to be am or pm by using only one "=" sign rather than using two to compare
    if (period == "am") {
      var phrase = " in the morning";
    }
    else {
      phrase = " in the evening"; //here i accidentally set var in front of phrase a second time- this created my bug where it only printed for in the evening.
    }
    if (min >= 50 && hour == 11 && period == "am") {
      console.log("it's almost noon");
    }
    else if (min >= 50 && hour == 11 && period == "pm"){//I neded to use else/if statement!!!
      console.log("It's almost midnight");
    }
    else if (min < 30) {
      console.log("Its just after " + hour + " " + period + phrase);
    }
    else {
      console.log("Its almost " + (hour + 1) + " " + period + phrase);
    }
  }
}
time(11, 55, "pm") //this doesnt work if I do 11
//note to self: last time i used function time(11, 13, "am") to call the function rather than just say time(11, 13, "pm")
// 24 hour clock version vv
//
//function time(hour, min) {
//
//
//
//     if (hour < 12) {
//       var period = "AM in the morning";
//
//     }
//     else {
//       if (hour > 12 && hour < 24) {
//         hour = hour % 12;
//       var period = "PM in the evening";
//     }
//     }
//
//     if (min < 30) {
//       console.log("Its just after " + hour + " " + period);
//     }
//     else {
//       console.log("Its almost " + hour + " " + period);
//     }
//
// }
// 
//
// time(14, 13)
//
