/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    message : 'enter url',
    name : 'url'               //the name to store the user response, here user response is stored in varibale called url
    }
  ])
  .then((answers) => {
    var URL = answers.url; 
    var qr_img = qr.image(URL);
    qr_img.pipe(fs.createWriteStream('qrgen.png'));
    
    fs.writeFile("qr_data.txt", URL, (err)=>{
        if (err) throw err;
        console.log("file saved") ;  
    }) ;
    
  })