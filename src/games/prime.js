import playBrainGame from '..';
import { getRandomNumberToString } from '../utils';
import { cons } from 'hexlet-pairs';

const minNum = 1;
const maxNum = 5;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeGame = () => {
  const getQuestionAndAnswer = () => {
    const randomNum = getRandomNumberToString(minNum, maxNum);
    const question = randomNum;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};


export default getPrimeGame;
