export const getRandom = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum) + minNum);

export const getRandomNumberToString = (minNum, maxNum) => (getRandom(minNum, maxNum)).toString();
