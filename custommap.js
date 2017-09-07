var words = ["ground", "control", "to", "major", "tom"];
function map(list, cb){
  var newArr = [];
  for (var i = 0; i < list.length; i++){
    newArr.push(cb(list[i], i, list));
  }
  return newArr;
}

var wordLength = map(words, function(word) {
  return word.length;
});

var upperCase = map(words, function(word) {
  return word.toUpperCase();
});

var reverseWord = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(wordLength);
console.log(upperCase);
console.log(reverseWord);

