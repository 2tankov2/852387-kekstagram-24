// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (from, to) => {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Функция для проверки максимальной длины строки
const isLengthRange = (text, maxLength) => text.length <= maxLength;

// функция, которая перемешивает (переупорядочивает случайным образом) элементы массива
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export {getRandomInt, isLengthRange, shuffleArray};
