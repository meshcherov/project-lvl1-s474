import playBrainGame from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';

const getNumberSeries = (startingSeriesNumber, seriesLength, diff) => {
  const arithmeticProgressionSeries = [];
  let minNumber = startingSeriesNumber;
  for (let i = 0; i < seriesLength; i += 1) {
    arithmeticProgressionSeries[i] = minNumber;
    minNumber += diff;
  }
  return arithmeticProgressionSeries;
};

const length = 10;

const getProgressionGame = () => {
  const getQuestionAndAnswer = () => {
    const startingSeriesNumber = getRandom(1, 50);
    const diff = getRandom(1, 5);
    const numberSeries = getNumberSeries(startingSeriesNumber, length, diff);
    const secretNumber = getRandom(0, numberSeries.length);

    const getCorrectAnswer = () => numberSeries[secretNumber];
    const correctAnswer = (getCorrectAnswer()).toString();

    const getQuestion = () => {
      numberSeries[secretNumber] = '..';
      return numberSeries;
    };

    const question = `${getQuestion()}`;

    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};


export default getProgressionGame;
