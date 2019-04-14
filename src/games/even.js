import playBrainGame from '..';
import { getRandomNumberToString } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getEvenGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumberToString(1, 100);

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};

export default getEvenGame;
