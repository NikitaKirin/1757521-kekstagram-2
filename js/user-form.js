import {isEscapeKey} from './util.js';

const uploadImageField = document.querySelector('#upload-file');
const userFormOverlayElement = document.querySelector('.img-upload__overlay');
const userFormElement = document.querySelector('#upload-select-image');
const closeFormButton = document.querySelector('#upload-cancel');


const onFormUploadImage = () => {
  openUserForm();
};

const onFormClickCloseButton = () => {
  closeUserForm();
};

const onFormEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeUserForm();
  }
};

function openUserForm ()  {
  userFormOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeyDown);
}

function closeUserForm () {
  userFormOverlayElement.classList.add('hidden');
  userFormElement.reset();
  document.body.classList.remove('modal-open');
}


uploadImageField.addEventListener('change', onFormUploadImage);
closeFormButton.addEventListener('click', onFormClickCloseButton);
