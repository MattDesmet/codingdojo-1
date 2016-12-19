var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
    for (var i = 0; i < students.length; i++){ //note to self: i created a for loop to go through the array of objects. these are different. the object has values of first_name and last_name that are defined as strongs. the array has values 0-end which correspond to each object, where array of 0 is the object defining michael jordan's first and last name
        var s = students[i];
        console.log(s.first_name + " " + s.last_name);
    }