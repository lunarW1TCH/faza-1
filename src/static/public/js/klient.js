const inputEl = document.getElementById('nameInput');
const btnEl = document.getElementById('confirmBtn');

btnEl.addEventListener('click', () => {
  const { value } = inputEl;

  if (btnEl.parentElement.children.length >= 3) {
    btnEl.parentElement.removeChild(btnEl.parentElement.lastChild);
  }

  const greeting = document.createElement('p');
  greeting.innerHTML = `Witaj ${value}!`;

  btnEl.parentElement.appendChild(greeting);
});
