#! /usr/bin/env node
import inquirer from "inquirer";
const randomIDnumber = Math.floor(1000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        }
    },
    {
        name: "Courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["HTML", "CSS", "Javascript", "Typescript", "NextJs"]
    }
]);
const SubjectsFees = {
    "HTML": 2000,
    "CSS": 3000,
    "Javascript": 3500,
    "Typescript": 5000,
    "NextJs": 7000,
};
console.log(`\nTution Fees: ${SubjectsFees[answer.Courses]}\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentMethod.payment}\n`);
let SubjectsFee = SubjectsFees[answer.Courses];
const paymentAmount = parseFloat(paymentMethod.amount);
if (SubjectsFee === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.Courses}\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n********Status********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomIDnumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
}
else {
    console.log("Invalid amount due to course\n");
}
