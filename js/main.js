// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomFromTo = (from, to) => {
  from = from < 0 ? 0 : from;
  to = to < 0 ? 0 : to;

  if (from  > to) {
    return -1;
  } return Math.floor(Math.random() * (to - from + 1) + from);
};

// Функция для проверки максимальной длины строки
const isLengthRange = (text, maxLength) => text.length <= maxLength;

getRandomFromTo(1, 67);
isLengthRange('gfyftf', 3);
