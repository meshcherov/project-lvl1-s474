import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const brainGame = (game) => {
  const description = car(game);
  console.log('Welcom to the Brain Games!');
  console.log(`${description} \n`);
  const name = getName();
  const correctAnswerCounter = 3;

  const iter = (i) => {
    if (i === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const question = car(cdr(game));
    const correctAnswer = cdr(cdr(game));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toUpperCase();
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
