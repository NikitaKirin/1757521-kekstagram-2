const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки данных');
    })
    .then((data) => onSuccess(data))
    .catch((error) => onFail(error));
};

const postData = (onSuccess, onFail, data) => {
  fetch('https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Ошибка при отправке данных');
      }
    })
    .catch((error) => onFail(error));
};

export {getData, postData};
