function decodeString(s) {
  const stack = [];
  let number = 0;
  let currStr = "";

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "[") {
      stack.push(currStr);
      stack.push(number);
      currStr = "";
      number = 0;
    } else if (s[i] === "]") {
      let n = stack.pop();
      let prevStr = stack.pop();
      const tempStr = currStr;

      for (let i = 0; i < n - 1; ++i) currStr += tempStr;
      currStr = prevStr + currStr;
    } else if (isNum(s[i])) {
      number = number * 10 + parseInt(s[i]);
    } else currStr += s[i];
  }

  return currStr;
}

function isNum(str) {
  return /[0-9]+/.test(str);
}

function main() {
  const testCase = ["3[a]2[bc]", "3[a2[c]]", "2[abc]3[cd]ef"];
  const expectation = ["aaabcbc", "accaccacc", "abcabccdcdcdef"];

  for (let i = 0; i < testCase.length; ++i)
    console.log(
      "Output:",
      decodeString(testCase[i]),
      "; Correct:",
      decodeString(testCase[i]) === expectation[i]
    );
}

main();
