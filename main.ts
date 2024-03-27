#!/usr /bin/env node 
import inquirer from "inquirer";


    let myBalance = 10000; // Dollar
    let myPin = 1661;

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance", "Fastcash"]
            }
        ]);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);

            console.log(`withdraw amount: ${amountAns.amount}`);
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance withdrawal canceled.");
            }
        } else if (operationAns.operation === "Fastcash") {
            let cash = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select your amount",
                    choices: [1000, 2000, 5000]
                }
            ]);
            let selectedamount = cash.fastCash;
            console.log(`your selected fastcash amount is ${selectedamount}`);
            if (selectedamount > myBalance) {
                console.log("Your balance is insufficient for fast cash.");
            } else {
                myBalance -= selectedamount;
                console.log(`You withdrew ${selectedamount}. Your remaining balance is ${myBalance}`);
            }
        } else if (operationAns.operation === "check balance") {
            console.log(`Your balance is: ${myBalance}`);
        }
    } else {
        console.log("Incorrect pin number");
    }



