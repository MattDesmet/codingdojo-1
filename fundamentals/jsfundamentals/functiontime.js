function time(hour, min) {



  if (hour < 12) {
    var period = "AM in the morning";

  }
  else {
    if (hour > 12 && hour < 24) {
      hour = hour % 12;
      var period = "PM in the evening";
    }
  }

  if (min < 30) {
    console.log("Its just after " + hour + " " + period);
  }
  else {
    console.log("Its almost " + hour + " " + period);
  }

}


time(14, 13)

// to try things use Read Evaluate Print Loop (REPL) in terminal to try things out quickly to see if my lines of code do what I think they should
function time(hour, min, period) {

  if (hour > 13 && min < 61 && period == "am" || period == "pm") {

    if (hour < 12) {
      var period = "AM in the morning";

    }
    else {
      if (hour > 12 && hour < 24) {
        hour = hour % 12;
        var period = "PM in the evening";
      }
    }

    if (min < 30) {
      console.log("Its just after " + hour + " " + period);
    }
    else {
      console.log("Its almost " + hour + " " + period);
    }
  }

}


time(14, 43, 'am' )
