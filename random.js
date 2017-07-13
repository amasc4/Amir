function rand(number){
  var randomDecimalNumber = Math.random()*number;
  console.log(randomDecimalNumber)
  var wholeIntegerNumber = (Math.round(randomDecimalNumber));
  console.log(wholeIntegerNumber)
}

rand(6);