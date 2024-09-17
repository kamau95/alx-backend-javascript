/*
const readline = require('readline');
// create interface for the input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
*/

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  // const message = data.toString().trim();
  const message = data;
  console.log(`Your name is: ${message}`);
  console.log('This important software is now closing');
  process.exit();
});
