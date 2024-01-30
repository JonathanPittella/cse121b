const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
result = [];
result1 = [];
result2 = [];
result3 = [];
result4 = [];

for (let i = 0; i < DAYS; i++) {
    if (studentReport[i] < LIMIT && studentReport[i] > DAYS) {
        result.push(studentReport[i]);
    }
}

  // for loop
  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      result1.push(studentReport[i]);
    }
  }

  // while loop
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      result2.push(studentReport[i]);
    }
    i++;
  }

  // forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      result3.push(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      result4.push(studentReport[i]);
    }
  }

  document.getElementById("result").innerHTML = "Result:" + result;
  document.getElementById("result1").innerHTML = "Result:" + result1;
  document.getElementById("result2").innerHTML = "Result:" + result2;
  document.getElementById("result3").innerHTML = "Result:" + result3;
  document.getElementById("result4").innerHTML = "Result:" + result4;