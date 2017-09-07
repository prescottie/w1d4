var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var sortedStudents = students.sort(function(x, y){
  var nameX = x.name.toUpperCase();
  var nameY = y.name.toUpperCase();
    if (nameX < nameY){
      return -1;
    }
    if (nameX > nameY) {
      return 1;
    }
    return y.age - x.age;
});

console.log(sortedStudents);