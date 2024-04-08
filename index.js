#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 500;
let myPin = 102030;
const pinanswer = await inquirer.prompt([
    {
        name: "pincode",
        message: "enter you password",
        type: "number",
    },
]);
// for pin 
if (pinanswer.pincode === myPin) {
    console.log(`correct pin code: `);
    let transaction = await inquirer.prompt([
        {
            name: 'transaction',
            type: 'list',
            message: 'Select Your way to transaction:',
            choices: ['withdraw', 'deposit', 'checkbalance']
        },
    ]);
    //for withdraw:
    if (transaction.transaction === 'withdraw') {
        let amount = await inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'Enter your Amount'
            }
        ]);
        if (amount.amount <= myBalance) {
            myBalance -= amount.amount;
            console.log(`Witdrwan amount ${amount.amount}`);
            console.log(`Your Remaining Balance: is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    //deposit:
    if (transaction.transaction === 'deposit') {
        let deposit = await inquirer.prompt([
            {
                name: 'deposit',
                type: 'number',
                message: 'Enter your deposit amount'
            }
        ]);
        if (deposit.deposit > 0) {
            myBalance += deposit.deposit;
            console.log(`Deposited Amount: ${deposit.deposit}`);
            console.log(`Your updated Balance is: ${myBalance}`);
        }
    }
    if (transaction.transaction === 'checkbalance')
        console.log(`Your Balance is : ${myBalance}`);
}
else {
    console.log(`Incorrect Pin code`);
}
