function FancyArray(arr, symbol){
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " " + symbol + " " + arr[i]);
    }
}
FancyArray(["James", "Jill", "Jane", "Jack"], "->")
//note to self, i tried to insert he symbol without "", it made the function break because it was not a strong, idk how to define if it is not a strong what to do, find out later