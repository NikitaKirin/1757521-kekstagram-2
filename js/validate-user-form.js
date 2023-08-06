import {hasDuplicates} from './util.js';

const form = document.querySelector('#upload-select-image');

function validateHashtags(value) {
  if (value.trim() === '') {
    return true;
  }
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const hashtags = value.split(' ').map((el) => el.toLowerCase());
  if (hashtags.length > 5 || hasDuplicates(hashtags)) {
    return false;
  }
  let valid = true;
  hashtags.forEach((hashtag) => {
    if (!re.test(hashtag)) {
      valid = false;
    }
  });
  return valid;
}

function validateComment(value) {
  return value.length >= 0 && value.length <= 140;
}

if (form) {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
  });
  pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtags, 'Invalid hashtags', 1);
  pristine.addValidator(form.querySelector('.text__description'), validateComment, 'Invalid comment', 1);
  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
}
