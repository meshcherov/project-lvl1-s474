import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const correctAnswerCounter = 3;

const playBrainGame = (getGame, descriptionGame) => {
  console.log('Welcom to the Brain Games!');
  console.log(`${descriptionGame}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (i) => {
    if (i === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const getQuestionAndAnswer = getGame();
    const question = car(getQuestionAndAnswer);
    const correctAnswer = cdr(getQuestionAndAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was
        ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    iter(i - 1);
  };

  iter(correctAnswerCounter);
};

export default playBrainGame;
