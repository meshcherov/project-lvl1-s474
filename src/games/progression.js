import brainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';

  const numberRowLength = 10;

  const startingRowNumber = getRandom(1, 50);

  const progressionDifference = getRandom(1, 5);

  const getNumberRow = (num) => {
    const arrayNumRow = [];
    let startingNum = num;
    let length = numberRowLength;
    while (length > 0) {
      arrayNumRow.push(startingNum);
      startingNum += progressionDifference;
      length -= 1;
    }
    return arrayNumRow;
  };

  const numberRow = getNumberRow(startingRowNumber);

  const secretNumber = getRandom(0, numberRow.length);

  const getCorrectAnswer = () => numberRow[secretNumber];

  const correctAnswer = getCorrectAnswer();

  const questionArr = () => {
    numberRow[secretNumber] = '..';
    return numberRow;
  };

  const question = `${questionArr()}`;

  const gamePair = cons(description, cons(question, correctAnswer.toString()));

  return gamePair;
};

brainGame(progressionGame);

export default progressionGame;
