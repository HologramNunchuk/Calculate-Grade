const marks = [80, 80, 90];
console.log(calculatedGrade(marks));

function calculatedGrade(marks) {
  const average = calculatedAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";

  return "A";
}

function calculatedAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / marks.length;
}
