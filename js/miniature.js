import {getPhotoDescriptions} from './data.js';
import {loadPicture} from './big-picture.js';

const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photos = getPhotoDescriptions();

const miniaturesList = document.createDocumentFragment();
const miniaturesContainer = document.querySelector('.pictures.container');

photos.forEach(({url,description, likes, comments}) => {
  const miniature = miniatureTemplate.cloneNode(true);
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__comments').innerText = comments.length;
  miniature.querySelector('.picture__likes').innerText = likes;
  miniature.addEventListener('click', (event) => {
    event.preventDefault();
    loadPicture(url, description, likes, comments);
  });
  miniaturesList.append(miniature);
});

miniaturesContainer.appendChild(miniaturesList);
