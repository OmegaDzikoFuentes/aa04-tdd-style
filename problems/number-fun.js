function returnsThree() {
  return 3;
}

function reciprocal(n) {

if(n === 0) {

  throw new Error("The reciprocal of 0 is undefined");

}

  let ans = 1 / n;

  return ans;

}

module.exports = {
  returnsThree,
  reciprocal
};
