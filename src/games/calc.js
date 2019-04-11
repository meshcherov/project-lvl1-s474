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
