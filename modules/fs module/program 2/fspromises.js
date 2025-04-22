const { log } = require("console");
const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname;

// fs.promises.readdir(file).then((data)=>console.log(data)).catch((err) =>console.log(err));


// fs.promises.writeFile(filePath, "this is the initial data", "utf-8")
// .then(console.log("File created successfully!"))
// .catch((err) => console.log(err));

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data)=>console.log(data))
//   .catch((err) => console.log(err));

// fs.promises
//   .appendFile(filePath, "\nthis is the new data", "utf-8")
//   .then(console.log("File updated successfully!"))
//   .catch((err) => console.log(err));


  fs.promises
    .unlink(filePath)
    .then(console.log("File deleted successfully!"))
    .catch((err) => console.log(err));