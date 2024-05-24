#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";




//Step 1) Computer will generate a rendom number - Done

const randomNumber = Math.floor(Math.random()*10 + 1);

//step 2) User input for guessing number -Done

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: chalk.yellow("\nplease guess a number between 1-10:\n"),
    },
]);


//step 3) Compare user input with computer generated number and show result -Done

if(answers.userGuessNumber === randomNumber){
    console.log(chalk.green("\n\tCongratulations! you guessed the right number\n"))
    console.log(chalk.magenta("\n\t\t====== You Won ======\n"));
    


}
else{
    console.log(chalk.red("\n\tYou guess wrong number\n\n"))
    console.log(chalk.red("\n\t====== You Lose ======\n"));
    

}
