//print multiples of 3 from -300 to 0, exclude -6 and -3:

for (var i = -300; i <=0; i+=3){
    if (i == -3 || i == -6){
        continue;
    }
    console.log(i);
}
