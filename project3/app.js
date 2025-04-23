import http from 'http';
import chalk from 'chalk';

const getJoke = () => {
  const url = "http://official-joke-api.appspot.com/random_joke"; 


  http.get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const joke = JSON.parse(data);
          console.log(chalk.yellow("Here is a random joke:"));
          console.log(chalk.red(joke.setup));
          console.log(chalk.blue.bgRed.bold(joke.punchline));
        } catch (err) {
          console.log(chalk.red("Failed to parse the joke data."));
        }
      });

      response.on("error", (err) => {
        console.log(chalk.red(`Error fetching the joke: ${err.message}`));
      });
    })
    .on("error", (err) => {
      console.log(chalk.red(`HTTP request error: ${err.message}`));
    });
};

getJoke();
