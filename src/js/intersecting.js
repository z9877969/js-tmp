const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

document.querySelectorAll('.section').forEach(el => {
  el.style.backgroundColor = `#${randomColor()}`;
});

const targetSecEl = document.querySelector('.target-section');


