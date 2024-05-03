
reverseString = (string) => {

  return string.split('').reverse().join('');
  
}
// function reverseString(string) {

//   let strArr = string.split('');

//   let backwardWord = [];

//   for (let i = strArr.length - 1; i >= 0; i--) {

//    backwardWord.push(strArr[i]);

//   }

//   return backwardWord.join('');

// };

module.exports = reverseString;
