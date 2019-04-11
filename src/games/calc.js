import { brainGame } from '..';

const calcGame = () => {
  const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);
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
  const getcorrectAnswer = () => {
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
        return undefined;
    }
  };

  const correctAnswer = getcorrectAnswer();

  const question = (numOne + getMathOperation + numTwo);

  brainGame(description, question, correctAnswer.toString());
};

export default calcGame;
