import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivider = (numOne, numTwo) => (numOne !== 0
  ? getGreatestCommonDivider(numTwo % numOne, numOne) : numTwo);

const gcdGame = () => {
  const numOne = getRandom(1, 25);
  const numTwo = getRandom(1, 25);
  const correctAnswer = (getGreatestCommonDivider(numOne, numTwo)).toString();

  const question = `${numOne} ${numTwo}`;

  const pairQuestionAndAnswer = cons(question, correctAnswer);
  return pairQuestionAndAnswer;
};

brainGame(gcdGame, description);

export default gcdGame;
