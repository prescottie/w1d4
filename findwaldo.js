function findWaldo(arr, found) {
  arr.forEach(function(name, i){
  // console.log(name);
  // for (var name = 0; name < arr.length; name++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i +"!" );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);