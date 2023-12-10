const messageError = document.querySelector('#error').content.querySelector('.error');
const messageSuccess = document.querySelector('#success').content.querySelector('.success');

const closeErrorMessage = () => {
  document.removeEventListener('keydown', onEscapeError);
  const errorContainer = document.querySelector('.error');
  if (errorContainer) {
    errorContainer.remove();
  }
};

const errorMouseClick = (evt) => {
  const errorContainer = document.querySelector('.error__inner');
  if (evt.target !== errorContainer) {
    closeErrorMessage();
  }
};

const showErrorMessage = () => {
  const message = messageError.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onEscapeError);
  document.addEventListener('click', errorMouseClick, { once: true });
  document.body.append(message);
};

function onEscapeError(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
}


const closeSuccessMessage = () => {
  document.removeEventListener('keydown', onEscapeSuccess);
  const successContainer = document.querySelector('.success');
  if (successContainer) {
    successContainer.remove();
  }
};

const successMouseClick = (evt) => {
  const successContainer = document.querySelector('.success__inner');
  if (evt.target !== successContainer) {
    closeSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const message = messageSuccess.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click', successMouseClick, { once: true });
  document.body.append(message);
};


function onEscapeSuccess(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessMessage();
  }
}

export { showErrorMessage, showSuccessMessage };
