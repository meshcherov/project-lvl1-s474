import getBrainGame from '..';
import { getRandomNumberToString } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const evenGame = () => {
  const question = getRandomNumberToString(1, 100);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  const pairQuestionAndAnswer = cons(question, correctAnswer);
  return pairQuestionAndAnswer;
};

getBrainGame(evenGame, description);

export default evenGame;
