import playBrainGame from '..';
import { getRandomNumberToString } from '../utils';
import { cons } from 'hexlet-pairs';

const numMin = 1;
const numMax = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getEvenGame = () => {
  const getQuestionAndAnswer = () => {
    const randomNum = getRandomNumberToString(numMin, numMax);
    const question = randomNum;

    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};

export default getEvenGame;
