var x = [2, 200, -700, 4, 3];
var max = x[0];
// tried to put arr[0], would that still work? it must be equal to the first value in the array to work
for (var i = 0; i < x.length; i++){
  if (max > x[i]){
    max = x[i];
  }
}
console.log(max);

// ^^ this gave me -700 as my max this is not the largest value
var x = [2, 200, -700, 4, 3];
var max = x[0];

for (var i = 0; i < x.length; i++) {
  if (max < x[i]) {
    // i set max to be greater when i wanted arr[i] to be bigger so i could hcange max to its value.
    max = x[i];
  }
}
console.log(max);
