import {openModal} from './picture-modal.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const miniaturesList = document.createDocumentFragment();
const miniaturesContainer = document.querySelector('.pictures.container');
const renderPhotos = (photos) => {
  photos.forEach(({url, description, likes, comments}) => {
    const miniature = miniatureTemplate.cloneNode(true);
    miniature.querySelector('.picture__img').src = url;
    miniature.querySelector('.picture__comments').innerText = comments.length;
    miniature.querySelector('.picture__likes').innerText = likes;
    miniature.addEventListener('click', (event) => {
      event.preventDefault();
      openModal(url, description, likes, comments);
    });
    miniaturesList.append(miniature);
  });
  miniaturesContainer.appendChild(miniaturesList);
};

if (miniatureTemplate) {
  getData(renderPhotos, showAlert);
}
