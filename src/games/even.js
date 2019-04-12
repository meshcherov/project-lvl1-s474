import { brainGame } from '..';
import { cons, car, cdr } from 'hexlet-pairs';


const evenGame = () => {
  const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);

  const description = 'Answer "yes" if number even otherwise answer "no".';

  const question = getRandom(1, 100);

  const isEvenNum = num => num % 2 === 0;

  const correctAnswer = isEvenNum(question) ? 'YES' : 'NO';

  const gamePair = cons(description, cons(question, correctAnswer));

  return gamePair;
};

brainGame(evenGame());

export default evenGame;
