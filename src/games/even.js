import { brainGame, getRandom } from '..';
import {
  cons, car, cdr, toString
} from 'hexlet-pairs';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const conditions = cons(1, 100);

const getCorrectAnswer = number => (number % 2 ? 'NO' : 'YES');

const evenGame = () => {
  brainGame(rules, conditions, getCorrectAnswer);
};

export default evenGame;
