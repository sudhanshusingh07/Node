const fs = require("fs");

//Create new file
//Sync..
//fs.writeFileSync('./text.txt', 'Hay Rain');

//Async..
// fs.writeFile("./text.txt", "Hay Async Rain", (err)=>{});


//Read existing file
// const result=fs.readFileSync("./text1.txt", "utf-8");
// console.log(result);


//write in existing file
//fs.appendFileSync("./text.txt",'hey there')

//Delete existing file
// fs.unlinkSync("./text1.txt")

//copy file
// fs.cpSync("./text.txt", "./copy.txt");

//create folder
fs.mkdirSync("my-doc")