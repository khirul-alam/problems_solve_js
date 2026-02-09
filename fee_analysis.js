/*
Problem: Exam Fee Analyzer
🔹 Given
You are given an array of exam candidate objects.
Each candidate has:
name (string)
subjects (number)
feePerSubject (number)
🎯 Your Task
Write a function called calculateExamFee(candidates) that:
Calculates total exam fee
Decides fee status
Returns a new array of objects
📌 Fee Status Rules
| Total Fee | Status |
| --------- | ------ |
| ≥ 5000    | High   |
| ≥ 3000    | Medium |
| < 3000    | Low    |
*/
function calculateExamFee(candidates){
    return candidates.map(candidate => {
        const totalExamFee = candidate.subjects * candidate.feePerSubject;
        let status;
        if(totalExamFee >=5000){
            status = "High";
        }
        else if(totalExamFee >=3000){
            status = "Medium";
        }
        else{
            status = "Low";
        }
        return{
            name: candidate.name,
            totalExamFee:totalExamFee,
            status:status
        }
    })
}
const candidates = [
  { name: "Rahim", subjects: 6, feePerSubject: 900 },
  { name: "Karim", subjects: 4, feePerSubject: 800 },
  { name: "Ayesha", subjects: 3, feePerSubject: 700 }
];
console.log(calculateExamFee(candidates))