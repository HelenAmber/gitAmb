import tabs from './modules/tabs';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import calculator from './modules/calculator';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

  tabs();
  cards();
  forms('form', modalTimerId);
  modal('[data-modal]', '.modal', modalTimerId);
  slider();
  timer();
  calculator();
});
