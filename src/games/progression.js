import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';

const getArrayNumberRow = (num, numberRowLength, diff) => {
  const arrayNumberRow = [];
  let startingNum = num;
  let length = numberRowLength;
  while (length > 0) {
    arrayNumberRow.push(startingNum);
    startingNum += diff;
    length -= 1;
  }
  return arrayNumberRow;
};

const getProgressionGame = () => {
  const numberRowLength = 10;
  const startingRowNumber = getRandom(1, 50);
  const diff = getRandom(1, 5);
  const numberRow = getArrayNumberRow(startingRowNumber, numberRowLength, diff);
  const secretNumber = getRandom(0, numberRow.length);

  const getCorrectAnswer = () => numberRow[secretNumber];
  const correctAnswer = getCorrectAnswer();

  const questionArr = () => {
    numberRow[secretNumber] = '..';
    return numberRow;
  };

  const question = `${questionArr()}`;

  const pairQuestionAndAnswer = cons(question, correctAnswer);
  return pairQuestionAndAnswer;
};

brainGame(getProgressionGame, description);

export default getProgressionGame;
