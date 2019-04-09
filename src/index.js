import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcom to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
