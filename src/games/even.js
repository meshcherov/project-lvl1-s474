import { brainGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const conditions = [1, 100];

const getCorrectAnswer = number => (number % 2 ? 'NO' : 'YES');

export const evenGame = () => {
  brainGame(rules, conditions, getCorrectAnswer);
};

export const s = () => true;
