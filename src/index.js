import readlineSync from 'readline-sync';

const rules = 'Answer "yes" if number even otherwise answer "no".';

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + 1);

const getCorrectAnswer = number => (number % 2 ? 'NO' : 'YES');

export const evenGame = () => {
  console.log('Welcom to the Brain Games!');
  console.log(`${rules} \n`);
  const name = getName();
  const correctAnswerCounter = 3;
  const iter = (i) => {
    if (i === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const number = getRandom(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toUpperCase();
    const correctAnswer = getCorrectAnswer(number);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was
        ${correctAnswer}`);
      return console.log(`Let's try again, ${name}!`);
    }
    return iter(i - 1);
  };
  return iter(correctAnswerCounter);
};
