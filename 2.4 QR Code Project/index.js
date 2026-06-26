/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";
async function getUserInput() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'url',
            message: 'Enter URL?',
            default: 'https://google.com'
        },
    ]);
    const qrBuffer = qr.imageSync(answers.url, {type: 'png'})
    const safeName = answers.url
        .replace(/^https?:\/\//, '')     // Removes the http:// or https:// part
        .replace(/[^a-zA-Z0-9]/g, '_')

    fs.writeFileSync(`./images/${safeName}.png`, qrBuffer);
    fs.appendFile("URL.txt", "\n"+ answers.url, (error)=>{
        if (error)console.log(error)
    })
    console.log(`\nHello, ${answers.url}!`);
}

getUserInput();