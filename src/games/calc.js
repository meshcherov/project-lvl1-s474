import playBrainGame from '..';
import { getRandom } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';

const getCorrectAnswer = (numOne, numTwo, getMathOperation) => {
  switch (getMathOperation) {
    case '+':
      return numOne + numTwo;

    case '-':
      return numOne - numTwo;

    case '*':
      return numOne * numTwo;

    case '/':
      return numOne / numTwo;

    default:
      return 'Error operation';
  }
};

const getCalcGame = () => {
  const getQuestionAndAnswer = () => {
    const mathOperations = ['+', '-', '*', '/'];
    const numOne = getRandom(1, 100);
    const numTwo = getRandom(1, 100);
    const numMathOperation = getRandom(0, mathOperations.length - 1);
    const getMathOperation = mathOperations[numMathOperation];
    const correctAnswer = getCorrectAnswer(numOne, numTwo, getMathOperation).toString();

    const question = `${numOne} ${getMathOperation} ${numTwo}`;
    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};

export default getCalcGame;
