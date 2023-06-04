import {isEscapeKey, checkFokus} from './util.js';

const uploadImageField = document.querySelector('#upload-file');
const userFormOverlayElement = document.querySelector('.img-upload__overlay');
const userFormElement = document.querySelector('#upload-select-image');
const closeFormButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlField = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
scaleControlField.value = '100%';


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

const onControlBiggerClick = () => {
  const currentValue = parseInt(scaleControlField.value, 10);
  if (currentValue < 100) {
    const newValue = currentValue + 25;
    scaleControlField.value = `${newValue}%`;
    imagePreview.style.scale = (0.01 * newValue).toString();
  }
};

const onControlSmallerClick = () => {
  const currentValue = parseInt(scaleControlField.value, 10);
  if (currentValue >= 50) {
    const newValue = currentValue - 25;
    scaleControlField.value = `${newValue}%`;
    imagePreview.style.scale = (0.01 * newValue).toString();
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

scaleControlSmaller.addEventListener('click', onControlSmallerClick);
scaleControlBigger.addEventListener('click', onControlBiggerClick);
