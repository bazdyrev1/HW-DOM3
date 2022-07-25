const fs = require('fs');

const getTextdata = () => {
  const textData = fs.readFileSync('./data.txt');
  return textData;
};

const counterLetters = (data) => {
  const allWordsWithoutSpace = data.replace(/\s+/g, '').trim().toLowerCase();
  const lettersAndTheirNumber = (allWordsWithoutSpace.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
  );
  return lettersAndTheirNumber;
};

const printInfo = () => {
  const data = getTextdata().toString();
  const resultCounterObj = counterLetters(data);
  const countWords = data.split(' ').length;
  const countSymbols = data.split('').length;

  let strResults = `Text: ${data} \nWords: ${countWords} \nSymbols: ${countSymbols} \n`;
  const srtArr = [];
  for (const key in resultCounterObj) {
    const srt = `${key}:${resultCounterObj[key]}`;
    srtArr.push(srt);
  }

  srtArr.forEach((letter) => {
    const row = `${letter}\n`;
    strResults += row;
  });
  fs.writeFileSync('./result.txt', strResults);
  console.log(strResults);
};
printInfo();
