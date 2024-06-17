let studentScore = [
  {
    studentName: "James",
    score: 40,
  },
  {
    studentName: "Ann",
    score: 80,
  },
  {
    studentName: "Joe",
    score: 52,
  },
  {
    studentName: "Ball",
    score: 67,
  },
  {
    studentName: "Mick",
    score: 89,
  },
  {
    studentName: "Ole",
    score: 10,
  },
];

// Start coding here
/* function that find avg and find min-max person and show scrores
*/

 function calculateScores(arrayObject) {
  let maxScore = 0;
  let minScore = Infinity;
  let avgScore = 0;
  let sumScore = 0;
  let minName = [];
  let maxName = [];

 for (let i of arrayObject) {
  sumScore += i.score;
  avgScore = sumScore/arrayObject.length;
  
    if (i.score <= minScore) {
        minScore = i.score;
        minName = i.studentName
    }
    if (i.score >= maxScore) {
        maxScore = i.score
        maxName = i.studentName
      }
  };

  console.log("Average score is " + avgScore);
  console.log(`${maxName} has the highest score, which is ${maxScore} points`);
  console.log(`${minName} has the lowest score, which is ${minScore} points`);
 }

 calculateScores(studentScore);