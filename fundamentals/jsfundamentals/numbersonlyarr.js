function numbersOnly(arr) {
    //i tried to use arr.isArray here it did not work 
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArray.push(arr[i]);
        }
    }
    return newArray; //I accidentally put this outside the function i needed it in there
}
console.log(numbersOnly(["orange", -5, 7])) //it wasnt giving me anything when i ran it because i did not ask it to print the function call result