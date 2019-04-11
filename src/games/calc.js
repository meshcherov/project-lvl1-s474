/*
import { brainGame } from '..';
import {
  cons, car, cdr, toString
} from 'hexlet-pairs';

const rules = 'What is the result of the expression?';

const conditions = cons(cons(cons(1, 100), cons(1, 100)), cons(1, 3));

const mathOperations = new Map([
  [1, '+'],
  [2, '-'],
  [3, '*'],
  [4, '/'],
]);

const question = toString();

const getMathOperation = mathOperations.get(car(conditions));

const getNumOne = car(car(conditions));

const getNumTwo = cdr(car(conditions));

const getCorrectAnswer = (a, b, c) => {
  a = getNumOne;
  b = getNumTwo;
  c = getMathOperation;
};

const calcGame = () => {
  brainGame(rules, conditions, getCorrectAnswer);
};

export default calcGame;
*/
import { brainGame } from '..';

const calcGameTest = () => {
  const rules = 'What is the result of the expression?';
  const numOne = getRandom(1, 100);
  const numTwo = getRandom(1, 100);
  const numMathOperation = getRandom(1, 3);
  const mathOperations = new Map([
    [1, '+'],
    [2, '-'],
    [3, '*'],
    [4, '/'],
  ]);
  const getMathOperation = mathOperations.get(numMathOperation);
  const getCorrectAnswer = () => {
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
        return false;
    }
  };
  const conditions = true;
  /*
  console.log(numOne);
  console.log(numTwo);
  console.log(getMathOperation);
  */
  brainGame(rules, conditions, getCorrectAnswer);
};

export default calcGameTest;
