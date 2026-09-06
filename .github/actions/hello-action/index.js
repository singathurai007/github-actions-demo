const name = process.env.INPUT_NAME;

const message = `Hello ${name} from my custom GitHub Action!`;

console.log(message);

const fs = require("fs");

fs.appendFileSync(
  process.env.GITHUB_OUTPUT,
  `message=${message}\n`
);
