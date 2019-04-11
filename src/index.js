import readlineSync from 'readline-sync';

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);

export const brainGame = (rules, conditions, getCorrectAnswer) => {
  console.log('Welcom to the Brain Games!');
  console.log(`${rules} \n`);
  const name = getName();
  const correctAnswerCounter = 3;
  const iter = (i) => {
    if (i === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const question = getRandom(conditions[0], conditions[1]);
    console.log(`Question: ${question}`);
    const correctAnswer = getCorrectAnswer(question);
    const answer = readlineSync.question('Your answer: ').toUpperCase();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was
        ${correctAnswer}`);
      return console.log(`Let's try again, ${name}!`);
    }
    return iter(i - 1);
  };
  return iter(correctAnswerCounter);
};
