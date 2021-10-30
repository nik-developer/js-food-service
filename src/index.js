import './styles.css';

const themeSwitchToggleRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

themeSwitchToggleRef.addEventListener('change', switchTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const choosedTheme = localStorage.getItem('settings');

defaultTheme();

function switchTheme() {
  if (themeSwitchToggleRef.checked) {
    localStorage.setItem('settings', Theme.DARK),
      bodyRef.classList.toggle('dark-theme');
  }
  if (!themeSwitchToggleRef.checked) {
    localStorage.setItem('settings', Theme.LIGHT),
      bodyRef.classList.toggle('dark-theme');
  }
}

function defaultTheme() {
  if (!choosedTheme) {
    localStorage.setItem('settings', Theme.LIGHT),
      bodyRef.classList.toggle('light-theme');
    return;
  }
  if (choosedTheme) {
    localStorage.setItem('settings', choosedTheme);
    bodyRef.classList.toggle(choosedTheme);
  }
  if (choosedTheme === Theme.DARK) {
    themeSwitchToggleRef.checked = true;
  }
}

import itemsTemplate from './templates/template.hbs';
import menu from './menu.json';

const markup = itemsTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', markup);
