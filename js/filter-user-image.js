import {filterConfigs} from './filter-config.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlField = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectLayout = document.querySelector('.img-upload__effect-level');
const effectsList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueField = document.querySelector('.effect-level__value');
const filterStylesConvert = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};
scaleControlField.value = '100%';


noUiSlider.create(sliderElement, filterConfigs['default']);

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

const onEffectButtonClick = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const filterType = evt.target.value;
    effectLayout.classList.toggle('hidden', !filterConfigs[filterType]);
    imagePreview.classList.remove(...imagePreview.classList);
    imagePreview.classList.add(`effects__preview--${filterType}`);
    sliderElement.noUiSlider.updateOptions(filterConfigs['default']);
    if (filterConfigs[filterType]) {
      sliderElement.noUiSlider.updateOptions(filterConfigs[filterType]);
      sliderElement.noUiSlider.on('update', () => {
        const currentValue = sliderElement.noUiSlider.get();
        effectValueField.setAttribute('value', `${parseFloat(currentValue)}`);
        imagePreview.style.filter = `${filterStylesConvert[filterType]}(${currentValue})`;
      });
    }
  }
};


scaleControlSmaller.addEventListener('click', onControlSmallerClick);
scaleControlBigger.addEventListener('click', onControlBiggerClick);
effectsList.addEventListener('click', onEffectButtonClick);
