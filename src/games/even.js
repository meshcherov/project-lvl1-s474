import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';


const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const question = getRandom(1, 100);

  const isEvenNum = num => num % 2 === 0;

  const correctAnswer = isEvenNum(question) ? 'YES' : 'NO';

  const gamePair = cons(description, cons(question, correctAnswer));

  return gamePair;
};

brainGame(evenGame);

export default evenGame;
