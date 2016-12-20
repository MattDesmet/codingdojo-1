
function flexcountDown(lownum, highnum, mult){
    for (var i = highnum; i >= lownum; i-= mult){
        console.log(i);
    }
}
flexcountDown(2, 9, 3)
