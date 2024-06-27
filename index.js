const { add } = require('./stringCalcMain');

try {
 
  
  console.log(add("//[***][%%%]\n2***2%%%3")); //7
  // This will throw an exception
  console.log(add("1,-2,3"));
} catch (e) {
  console.error(e.message); // negatives not allowed: -2
}
