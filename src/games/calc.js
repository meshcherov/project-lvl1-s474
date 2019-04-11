import { brainGame } from '..';

const rules = 'What is the result of the expression?';

const mathOperations = new Map([
  [1, '+'],
  [2, '-'],
  [3, '*'],
  [4, '/'],
]);

const calcGame = () => {
  brainGame(rules);
};

export default calcGame;
