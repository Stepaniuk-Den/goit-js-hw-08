import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_FEEDBACK = 'feedback-form-state';
const newArr = JSON.parse(localStorage.getItem(KEY_FEEDBACK)) || {};

form.addEventListener(
  'input',
  throttle(evt => {
    newArr[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_FEEDBACK, JSON.stringify(newArr));
  }, 500)
);

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(newArr);
  localStorage.removeItem(KEY_FEEDBACK);
  form.reset();
}

function reload() {
  for (let el of form) {
    if (newArr && Object.keys(newArr).includes(el.name)) {
      el.value = newArr[el.name];
    }
  }
}
reload();
