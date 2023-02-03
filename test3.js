/**
 * Evaluation from string to sum of number
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  s = "(" + s + ")";
  let stack = [];
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] === ")") {
      while (stack[stack.length - 1] !== "(") temp.push(stack.pop());
      stack.pop();
      stack.push(count(temp));
      continue;
    }
    if (isNum(stack[stack.length - 1]) && isNum(s[i])) {
      stack[stack.length - 1] += s[i];
      continue;
    }
    if (s[i] === "-" || s[i] === "+") {
      if (stack.length === 0 || stack[stack.length - 1] === "(")
        stack.push("0");
    }
    stack.push(s[i]);
  }
  return stack[0];
}

/**
 * The calculation for total
 * @param {string} temp
 * @return {number}
 */
function count(temp) {
  let res = Number(temp.pop());
  while (temp.length > 0) {
    let sign = temp.pop();
    if (sign === "+") {
      res += Number(temp.pop());
    } else {
      res -= Number(temp.pop());
    }
  }
  return res;
}

/**
 * The check parameter is number
 * @param {*} str
 * @return {boolean}
 */
function isNum(str) {
  return /[0-9]+/.test(str);
}

function main() {
  const testCase = ["1 + 1", "2-1 + 2", "(1+(4+5+2)-3)+(6+8)"];
  const expectation = [2, 3, 23];

  for (let i = 0; i < testCase.length; ++i)
    console.log(
      "Output:",
      calculate(testCase[i]),
      "; Correct:",
      calculate(testCase[i]) === expectation[i]
    );
}

main();
