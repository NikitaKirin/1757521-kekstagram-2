import {hasDuplicates} from './util.js';

const validateHashtags = (value) => {
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
};

const validateComment = (value) => value.length >= 0 && value.length <= 140;

export {validateHashtags, validateComment};
