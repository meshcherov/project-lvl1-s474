import playBrainGame from '..';
import { getRandom } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivider = (numOne, numTwo) => (numOne !== 0
  ? getGreatestCommonDivider(numTwo % numOne, numOne) : numTwo);

const getGcdGame = () => {
  const getQuestionAndAnswer = () => {
    const numOne = getRandom(1, 25);
    const numTwo = getRandom(1, 25);
    const correctAnswer = (getGreatestCommonDivider(numOne, numTwo)).toString();

    const question = `${numOne} ${numTwo}`;
    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};

export default getGcdGame;
