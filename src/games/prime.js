import getBrainGame from '..';
import { getRandomNumberToString } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 3; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumberToString(1, 50);
    const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };
  getBrainGame(getQuestionAndAnswer, description);
};


export default getPrimeGame;
