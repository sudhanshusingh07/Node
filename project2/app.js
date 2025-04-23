const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter your filename: ", (fileName) => {
    rl.question("Enter the content for your file: ", (content) => {
      fs.writeFile(`${fileName}.txt`, content, (err) => {
        if (err) {
          console.log("Some error occurred:", err);
        } else {
          console.log(`File "${fileName}.txt" created successfully!`);
        }
        rl.close();
      });
    });
  });
};

fileCreation();
