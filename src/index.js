import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const brainGame = (game) => {
  const description = car(game);
  console.log('Welcom to the Brain Games!');
  console.log(`${description} \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const correctAnswerCounter = 3;

  const iter = (i) => {
    if (i === 0) {
      return console.log(`Congratulations, ${userName}!`);
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
      return console.log(`Let's try again, ${userName}!`);
    }

    return iter(i - 1);
  };

  return iter(correctAnswerCounter);
};

export default brainGame;
