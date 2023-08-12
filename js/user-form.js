import {isEscapeKey, checkFokus} from './util.js';
import './filter-user-image.js';
import {validateHashtags, validateComment} from './validate-user-form.js';
import {postData} from './api.js';
import {resetFilters} from './filter-user-image.js';

const form = document.querySelector('#upload-select-image');

if (form) {
  const uploadImageField = document.querySelector('#upload-file');
  const userFormOverlayElement = document.querySelector('.img-upload__overlay');
  const closeFormButton = document.querySelector('#upload-cancel');
  const hashtagsInput = document.querySelector('.text__hashtags');
  const commentInput = document.querySelector('.text__description');
  const submitButton = form.querySelector('.img-upload__submit');

  const messageLayouts = {
    success: null,
    error: null,
  };

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
  });

  pristine.addValidator(hashtagsInput, validateHashtags, 'Invalid hashtags', 1);
  pristine.addValidator(commentInput, validateComment, 'Invalid comment', 1);

  const onFormEscKeyDown = (evt) => {
    if (isEscapeKey(evt) && !checkFokus(hashtagsInput) && !checkFokus(commentInput)) {
      closeUserForm();
    }
  };

  // eslint-disable-next-line no-inner-declarations
  function openUserForm() {
    userFormOverlayElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onFormEscKeyDown);
  }

  // eslint-disable-next-line no-inner-declarations
  function closeUserForm() {
    userFormOverlayElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  const blockSubmitButton = () => {
    submitButton.disabled = true;
    submitButton.innerText = 'Публикую...';
  };

  const unblockSubmitButton = () => {
    submitButton.disabled = false;
    submitButton.innerText = 'Опубликовать';
  };

  const onSuccessPost = () => {
    resetFilters();
    form.reset();
    closeUserForm();
    unblockSubmitButton();
    if (messageLayouts.success) {
      messageLayouts.success.classList.remove('hidden');
    } else {
      const successTemplate = document.querySelector('#success').content.querySelector('.success');
      const successContainer = successTemplate.cloneNode(true);
      successContainer.addEventListener('click', (evt) => {
        if (evt.target !== successContainer.querySelector('.success__inner')) {
          successContainer.classList.add('hidden');
        }
      });
      document.addEventListener('keydown', (evt) => {
        if (isEscapeKey(evt)) {
          successContainer.classList.add('hidden');
        }
      });
      messageLayouts.success = successContainer;
      document.body.appendChild(successContainer);
    }
  };

  const onErrorPost = () => {
    closeUserForm();
    unblockSubmitButton();
    if (messageLayouts.error) {
      messageLayouts.error.classList.remove('hidden');
    } else {
      const errorTemplate = document.querySelector('#error').content.querySelector('.error');
      const errorContainer = errorTemplate.cloneNode(true);
      errorContainer.addEventListener('click', (evt) => {
        if (evt.target !== errorContainer.querySelector('.error__inner')) {
          errorContainer.classList.add('hidden');
        }
      });
      document.addEventListener('keydown', (evt) => {
        if (isEscapeKey(evt)) {
          errorContainer.classList.add('hidden');
        }
      });
      messageLayouts.error = errorContainer;
      document.body.appendChild(errorContainer);
    }
  };

  const setUserFormSubmit = (onSuccess, onFail) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const isValid = pristine.validate();
      if (isValid) {
        blockSubmitButton();
        postData(
          onSuccess,
          onFail,
          new FormData(evt.target)
        );
      }
    });
  };

  uploadImageField.addEventListener('change', () => openUserForm());
  closeFormButton.addEventListener('click', () => {
    form.reset();
    closeUserForm();
  });

  setUserFormSubmit(onSuccessPost, onErrorPost);
}
