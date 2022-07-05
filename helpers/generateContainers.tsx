import Words from '../public/words.json';

const generateContainers = () => {
  const arrayOfStrings: string[] = [];
  for (let i = 0; i < 20; i++) {
    arrayOfStrings.push(Words[Math.floor(Math.random() * 1000)]);
  }
  return arrayOfStrings;
};

export default generateContainers;
