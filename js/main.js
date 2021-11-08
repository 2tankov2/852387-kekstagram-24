/* eslint-disable id-length */
const DESCRIPTION = ['Высоко и падать глубоко', 'Счастье так близко', 'Рай существует',
  'Улыбка — это самый красивый изгиб женского тела', 'Отдыхаем', 'Бэтмен в городе', 'Диета',
  'Вкусный наверное', 'Улыбаемся и машем', 'Тапули', 'По газону не ходить',
  'Красавица не для наших дорог', 'Тяп-ляп', 'Злая шутка', 'Готов к походу', 'Выше облаков',
  'Поём', 'Машшина', 'Тапочки-шпионы', 'Странные деревья', 'Обед', 'Красота',
  'Я иду медленно, но не назад.', 'Оторвёмся', 'Непрошенные гости'];

const LIKES = [15, 200];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

// диапазон чисел
const Range = {
  MIN: 1,
  MAX: 25,
};

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

// упорядоченный список
const getList = new Array(Range.MAX).fill(null).map((item, i) => i + 1);
// перемашанный список
const shuffleListId = shuffleArray(getList.slice(0));
const shuffleListUrl = shuffleArray(getList.slice(0));
const shuffleListIdComments = shuffleArray(getList.slice(0));

const getUrl = (count) => `photos/${shuffleListUrl[count]}.jpg`;

const getAvatar = () => `img/avatar-${getRandomInt(1,6)}.svg`;

const getMessage = () => MESSAGES[getRandomInt(0, MESSAGES.length - 1)];

const getName = () => NAMES[getRandomInt(0, NAMES.length - 1)];

const createComment = (count) => (
  {
    id: shuffleListIdComments[count],
    avatar: getAvatar(),
    message: getMessage(),
    name: getName(),
  }
);

const generateComments = () => new Array(getRandomInt(0, 5)).fill(null).map((item, i) => createComment(i));

const createPhoto = (count) => (
  {
    id: shuffleListId[count],
    url: getUrl(count),
    description: DESCRIPTION[count],
    likes: getRandomInt(...LIKES),
    comments: generateComments(),
  }
);

const gereratePotos = () => new Array(Range.MAX).fill(null).map((item, i) => createPhoto(i));

isLengthRange('fgfjgj', 5);
generateComments();
gereratePotos();
