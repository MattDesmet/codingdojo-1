function printRange(start, end, skip) {
    if ( skip == undefined) {
        skip = 1;
    }
    //note to self: this is how i make it so if the user does not pass a skip amount I would use this parameter to fix it. in a later version of javascript withint the function definition i could write "funtion printRange(start, end, skip = 1)" and then it would default to that
    if (end == undefined){
        end = start;
        start = 0;
        //note to self: does not work for negative numbers, returns NaN, find out what to put to make it work for a negative number
    }
    if (start < end) {
        for ( var i = start; i < end; i+=skip) {
            console.log(i);
    }
    }
    else {
        console.log("NaN");
    }
}
printRange(13)