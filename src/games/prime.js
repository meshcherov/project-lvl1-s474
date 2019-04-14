import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const question = (getRandom(1, 50).toString());
  const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';

  const pairQuestionAndAnswer = cons(question, correctAnswer);
  return pairQuestionAndAnswer;
};

brainGame(primeGame, description);

export default primeGame;
