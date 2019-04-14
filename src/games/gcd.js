import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivider = (numOne, numTwo) => {
  if (numOne === numTwo) {
    return numOne;
  }
  if (numOne > numTwo) {
    if (numOne % numTwo === 0) {
      return numTwo;
    }
  }
  if (numOne < numTwo) {
    if (numTwo % numOne === 0) {
      return numOne;
    }
  }
  let gcdNum = 0;
  for (let i = 1; i < numOne && i < numTwo; i += 1) {
    if ((numOne % i === 0) && (numTwo % i === 0)) {
      gcdNum = i;
    }
  }
  return gcdNum;
};

const gcdGame = () => {
  const numOne = getRandom(1, 25);
  const numTwo = getRandom(1, 25);
  const correctAnswer = getGreatestCommonDivider(numOne, numTwo);

  const question = `${numOne} ${numTwo}`;

  const pairQuestionAndAnswer = cons(question, correctAnswer);
  return pairQuestionAndAnswer;
};

brainGame(gcdGame, description);

export default gcdGame;
