
Problems:Employee Salary Analyzer
🔹 Given
You are given an array of employee objects.
Each employee has:
name (string)
salary (number)
bonus (number - percentage)
🎯 Your Task
Write a function called calculateFinalSalary(employees) that:
Calculates the bonus amount
Adds bonus to the salary
Determines salary level
Returns a new array of objects
| Final Salary | Level  |
| ------------ | ------ |
| ≥ 100000     | High   |
| ≥ 60000      | Medium |
| < 60000      | Low    |

function calculateFinalSalary(employees){
    return employees.map(employee => {
        const bonusAmount = employee.salary * employee.bonus / 100;
        const finalSalary = Math.round(employees.salary + bonusAmount);
        let level;
        if (finalSalary >= 100000){
            level = "High"
        }
        else if (finalSalary >= 60000){
            level = "Medium"
        }
        else{
            level = "Low"
        }
        return{
            name:employee.name,
            finalSalary:finalSalary,
            level: level
        };
    });
    
}
const employees = [
  { name: "Rahim", salary: 50000, bonus: 20 },
  { name: "Karim", salary: 70000, bonus: 10 },
  { name: "Ayesha", salary: 40000, bonus: 15 }
];

console.log(calculateFinalSalary(employees));



