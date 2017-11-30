var testScore = 81;
var grade;

if (testScore <= 59){
  grade = "F";
} else if (testScore >= 60 && testScore <70){
  grade = "D";
} else if (testScore >= 70 && testScore <80){
  grade = "C";
} else if (testScore >= 80 && testScore <90){
  grade = "B";
} else {
  grade = "A";};

switch(grade) {
  case "A":
    console.log('You got an A! Great job!');
    break;
  case "B":
    console.log('You got an B! Good job!');
    break;
  case "C":
    console.log("C! Okay.");
    break;
  case "D":
    console.log("Barely passed with a D!");
    break;
  case "F":
    console.log("You failed.");
    break;
  default:
    console.log('Try again next time!');
    break;
}

//
// if (testScore <= 50){
//   console.log("You got an F");
// } else if (testScore >= 60){
//   console.log("You got a D");
// } else if (testScore >= 70){
//   console.log("You got a C");
// } else if (testScore >= 80){
//   console.log("You got a B");
// } else (testScore >= 90){
//   console.log("You got an A");
// }
