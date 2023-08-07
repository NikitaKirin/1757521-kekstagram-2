import {isEscapeKey, checkFokus} from './util.js';
import './filter-user-image.js';
import './validate-user-form.js';

const uploadImageField = document.querySelector('#upload-file');
const userFormOverlayElement = document.querySelector('.img-upload__overlay');
const userFormElement = document.querySelector('#upload-select-image');
const closeFormButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const onFormUploadImage = () => {
  openUserForm();
};

const onFormClickCloseButton = () => {
  closeUserForm();
};

const onFormEscKeyDown = (evt) => {
  if (isEscapeKey(evt) && !checkFokus(hashtagsInput) && !checkFokus(commentInput)) {
    closeUserForm();
  }
};

function openUserForm() {
  userFormOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeyDown);
}

function closeUserForm() {
  userFormOverlayElement.classList.add('hidden');
  userFormElement.reset();
  document.body.classList.remove('modal-open');
}


uploadImageField.addEventListener('change', onFormUploadImage);
closeFormButton.addEventListener('click', onFormClickCloseButton);
