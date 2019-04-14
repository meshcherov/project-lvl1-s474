import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const question = (getRandom(1, 100)).toString();

  const isEvenNum = num => num % 2 === 0;
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';

  const pairQuestionAndAnswer = cons(question, correctAnswer);
  return pairQuestionAndAnswer;
};

brainGame(evenGame, description);

export default evenGame;
