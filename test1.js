/**
 * Fibonacci
 * @param {number} n 
 * @return {number}
 */
function F(n) {
  if (n <= 1) return n;
  return F(n - 1) + F(n - 2);
}

function main() {
  const testCase = [5, 12, 17];
  const expectation = [5, 144, 1597];

  for (let i = 0; i < testCase.length; ++i)
    console.log(
      "Output:", F(testCase[i]),
      "; Correct:", F(testCase[i]) === expectation[i]
    );
}

main();
