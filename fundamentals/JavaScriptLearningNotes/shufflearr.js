function shuffle(arr){
    var temp = [];
    for (var i=0; i < arr.length; i++){
        i=0;
        var index = (Math.floor(Math.random() * (arr.length)));
        temp.push(arr[index]);
        arr[arr.length-1]=arr[index];
        arr.pop;
        }  
        return temp;
    console.log(temp);
}
shuffle(['apple', 1, 8, 'nine', 9, 10])