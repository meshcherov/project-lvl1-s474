import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

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

const calcGame = () => {
  const description = 'What is the result of the expression?';
  const mathOperations = new Map([
    [1, '+'],
    [2, '-'],
    [3, '*'],
    [4, '/'],
  ]);
  const numOne = getRandom(1, 100);
  const numTwo = getRandom(1, 100);
  const numMathOperation = getRandom(1, mathOperations.size);
  const getMathOperation = mathOperations.get(numMathOperation);

  const correctAnswer = getCorrectAnswer(numOne, numTwo, getMathOperation);

  const question = (`${numOne} ${getMathOperation} ${numTwo}`);

  const gamePair = cons(description, cons(question, correctAnswer.toString()));

  return gamePair;
};

brainGame(calcGame);

export default calcGame;
