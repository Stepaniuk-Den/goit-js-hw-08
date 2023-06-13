import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input');
const inputMessage = form.querySelector('textarea');
const KEY_FEEDBACK = 'feedback-form-state';

const arr = {};

inputEmail.addEventListener('input', evt => {
  arr.email = evt.currentTarget.value;
  localStorage.setItem(KEY_FEEDBACK, JSON.stringify(arr));
});
inputMessage.addEventListener('input', evt => {
  arr.message = evt.currentTarget.value;
  localStorage.setItem(KEY_FEEDBACK, JSON.stringify(arr));
});

function reload() {
  // if (localStorage.getItem(KEY_FEEDBACK) !== {})
  //   inputEmail.textContent = JSON.parse(localStorage.getItem(KEY_FEEDBACK));
}
reload();
