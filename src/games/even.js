import { brainGame } from '..';
import { cons, car, cdr } from 'hexlet-pairs';


const evenGame = () => {
  const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);

  const rules = 'Answer "yes" if number even otherwise answer "no".';

  const pair = cons(1, 100);

  const question = getRandom(car(pair), cdr(pair));

  const correctAnswer = question % 2 ? 'NO' : 'YES';

  brainGame(rules, question, correctAnswer);
};

export default evenGame;
