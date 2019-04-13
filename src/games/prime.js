import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';


const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const question = getRandom(1, 100);

  const isPrimeNum = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const correctAnswer = isPrimeNum(question) ? 'YES' : 'NO';

  const gamePair = cons(description, cons(question, correctAnswer));

  return gamePair;
};

brainGame(primeGame);

export default primeGame;
