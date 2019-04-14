import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getBrainGame = (game, descriptionGame) => {
  const description = descriptionGame;
  console.log('Welcom to the Brain Games!');
  console.log(`${description} \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  const correctAnswerCounter = 3;

  const iter = (i) => {
    if (i === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const getQuestionAndAnswer = game();
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
      return false;
    }

    return iter(i - 1);
  };

  return iter(correctAnswerCounter);
};

export default getBrainGame;
