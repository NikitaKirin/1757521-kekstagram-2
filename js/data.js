import {getRandomNumber} from './util.js';

export {getPhotoDescriptions};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const authors = [
  'Иван',
  'Мария',
  'Максим',
  'Гриша',
  'Света',
];

/**
 * Storages for ids of entities
 */
const photoDescriptionsIds = [];
const commentsIds = [];


/**
 * Get photo's data
 * @returns {{comments: {name: string, id: Number, avatar: string, message: string}[], description: string, id: Number, url: string, likes: Number}}
 */
function getPhotoDescription() {
  let id = getRandomNumber(1, 25);
  while (photoDescriptionsIds.includes(id)) {
    id = getRandomNumber(1, 25);
  }
  photoDescriptionsIds.push(id);
  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Тестовое описание!',
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 10)}, getComment),
  };
}

/**
 * Get comment's data
 * @returns {{name: string, id: Number, avatar: string, message: string}}
 */
function getComment() {
  let id = getRandomNumber(1, 300);
  while (commentsIds.includes(id)) {
    id = getRandomNumber(1, 300);
  }
  commentsIds.push(id);
  return {
    id,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: messages[getRandomNumber(0, messages.length - 1)],
    name: authors[getRandomNumber(0, authors.length - 1)],
  };
}

/**
 * Generate photos' data
 * @returns {{comments: {name: string, id: Number, avatar: string, message: string}[], description: string, id: Number, url: string, likes: Number}[]}
 */
function getPhotoDescriptions() {
  return Array.from({length: 25}, getPhotoDescription);
}
