function daysuntilmybday(numDays) {
    while (numDays >= 0) {
        if (numDays > 30) {
            console.log(numDays + " days until my birthday. Such a long time... :(");
        }
        else if (numDays > 5) {
            console.log(numDays + " OMG so close!");
        }
        else if (numDays > 1) {
            console.log(numDays + " DAYS UNTIL MY BIRTHDAY!!!");
        }
        else if (numDays == 1) {
            console.log(numDays + " DAY UNTIL MY BIRTHDAY!!!");
        }
        else if (numDays == 0) {
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        //use \n to insert new line so code prints out as three lines rtaher than one long ass one.
        //in this challenge i had cognitive bias: i assumed there would be more variables involved than the ones given due to the previous question.
        //this caused me to try to create a months variable which was unnecessary 
        }

        numDays--;
    }

}
daysuntilmybday(34)

