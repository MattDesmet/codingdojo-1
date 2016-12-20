// print integers 1 = 100. if divisible by 5 print "coding" instead of number. if divisible by 10 and 5 print codoing and dojo
for (var i = 1; i <=100; i++){
    if (i % 5 == 0){
        console.log("Coding");
        if (i % 5 == 0 && i % 10 == 0){
            console.log("Dojo");
        }
    } 
    else {
        console.log(i);
    }
}