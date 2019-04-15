import playBrainGame from '..';
import { getRandom } from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';

const getNumberProgression = (startingProgressionNumber, ProgressionLength, diff) => {
  const arithmeticProgression = [];
  for (let i = 0; i < ProgressionLength; i += 1) {
    arithmeticProgression[i] = startingProgressionNumber + i * diff;
  }
  return arithmeticProgression;
};

const length = 10;

const getProgressionGame = () => {
  const getQuestionAndAnswer = () => {
    const startingProgressionNumber = getRandom(1, 50);
    const diff = getRandom(1, 5);
    const numberProgression = getNumberProgression(startingProgressionNumber, length, diff);
    const secretNumber = getRandom(0, numberProgression.length);

    const getCorrectAnswer = () => numberProgression[secretNumber];
    const correctAnswer = (getCorrectAnswer()).toString();

    const getQuestion = (numProgression, secretPosition) => {
      const progression = numProgression;
      progression[secretPosition] = '..';
      return progression.toString();
    };
    const question = getQuestion(numberProgression, secretNumber);
    return cons(question, correctAnswer);
  };
  playBrainGame(getQuestionAndAnswer, description);
};

export default getProgressionGame;
