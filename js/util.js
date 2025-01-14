const ALERT_SHOW_TIME = 5000;

/**
 * Get random number from a selected range
 * @see {@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function getRandomNumber(min = 0, max = 0) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

/**
 * Check string length
 * @param {String} string
 * @param {Number} maxLength
 * @return boolean
 */
function checkStringLength(string = '', maxLength = 0) {
  return string.length <= maxLength;
}

const isEscapeKey = (evt) => evt.key === 'Escape';

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

const checkFokus = (el) => el === document.querySelector(':focus');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};


export {getRandomNumber, checkStringLength, isEscapeKey, hasDuplicates, checkFokus, showAlert, debounce, throttle};
