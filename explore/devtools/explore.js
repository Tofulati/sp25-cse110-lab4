// FireFox didn't support in browser js editting. By passed this issue by updating locally and then refreshing the page.

// part1.js

function printSum() {
  debugger
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
  let result = Number(num1) + Number(num2)
  return result
}

function init() {
  document.getElementById('printSum').addEventListener('click', printSum);
}

window.addEventListener('DOMContentLoaded', init);