import inquirer from "inquirer"

let answers = await inquirer.prompt([{
    type: "number",
    name: "age",
    message: "Enter your age:",
}])
console.log("your current age is:" , answers.age)