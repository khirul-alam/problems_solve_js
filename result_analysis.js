/*
🔹 Problem: Student Result Analyzer
You are given an array of student objects.
Each student has:
name (string)
marks (array of numbers)
🎯 Your Task
Write a function called analyzeResults(students) that will:
Calculate the average marks of each student
Determine the grade based on the average:
A → average ≥ 80
B → average ≥ 60 and < 80
C → average ≥ 40 and < 60
F → average < 40
*/
function analyzeResults(students){
   return students.map(students => {
        const total = students.marks.reduce((sum, mark) => sum + mark, 0);
        const avarage = Math.round(total/students.marks.length);
        let grade;
        if(avarage>=80){
            grade = "A";
        }
        else if(avarage>=60){
            grade ="B";
        }
        else if(avarage>=40){
            grade = "C";
        }
        else {
            grade = "F";
        }

        return{
            name: students.name,
            avarage: avarage,
            grade: grade
        };
    });
    

}

const students = [
  { name: "Rahim", marks: [80, 75, 90] },
  { name: "Karim", marks: [50, 60, 55] },
  { name: "Ayesha", marks: [30, 35, 40] }
];

console.log(analyzeResults(students));
