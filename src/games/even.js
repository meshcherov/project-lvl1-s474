import { brainGame } from '..';
import { cons, car, cdr } from 'hexlet-pairs';


const evenGame = () => {
  const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);

  const description = 'Answer "yes" if number even otherwise answer "no".';

  const pair = cons(1, 100);

  const question = getRandom(car(pair), cdr(pair));

  const isEvenNum = num => num % 2 === 0;

  const correctAnswer = isEvenNum(question) ? 'YES' : 'NO';

  brainGame(description, question, correctAnswer);
};

export default evenGame;
