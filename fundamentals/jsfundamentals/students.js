// var students = [ 
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
// ]
//     for (var i = 0; i < students.length; i++){ //note to self: i created a for loop to go through the array of objects. these are different. the object has values of first_name and last_name that are defined as strongs. the array has values 0-end which correspond to each object, where array of 0 is the object defining michael jordan's first and last name
//         var s = students[i];
//         console.log(s.first_name + " " + s.last_name);
//     }

// var users = {
//  'Students': [ 
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
//   ],
//  'Instructors': [
//      {first_name : 'Michael', last_name : 'Choi'},
//      {first_name : 'Martin', last_name : 'Puryear'}
//   ]
//  }
//     for (var i = 0; i < users[Students].length; i++) {
//         var s = users[Students[i]];
//         var ch = users[Students[i[first_name + last_name].length]];
//         console.log(i + s.first_name + " " + s.last_name + ch);
        
//     }
//      for (var i = 0; i < users[Instructors].length; i++){
//          var in = users[Instructors[i]];
//          var ch2 = users[Instructors[i[first_name + last_name].length]];
//          console.log(i + in.first_name + " " + in.last_name + ch2);
//      }

     //part 2 in class version
var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
}
for (var category in users){
    console.log(category);
}
    for (var i = 0; i < users[category].length; i++){
        console.log(users[category][i]);
    }
    for (var person in users[category][i]){
    console.log(users[category][i][person]);
    }///this isnt working 3: