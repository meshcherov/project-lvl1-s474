import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcom to the Brain Games!');
};

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  const name = userName;
  return name;
};

export const writeRuleOfGame = (rules) => {
  console.log(`${rules} \n`);
};

const random = () => {
  const minNum = 1;
  const maxNum = 100;
  const randomNum = Math.floor(Math.random() * (maxNum - minNum) + 1);
  return randomNum;
};

export const evenGame = (i = 0) => {
  const number = random();
  const correctAnswer = number % 2 ? 'NO' : 'YES';
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').toUpperCase();
  if (answer !== correctAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was
      ${correctAnswer}`);
    console.log('Let\'s try again, Name!');
  } else {
    console.log('Correct!');
    for (let a = i + 1; a < 3;) {
      evenGame(a);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${getName()}!`);
    }
  }
};
