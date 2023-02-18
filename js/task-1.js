'use strict';
/*jshint -W097*/

const btnTaskOne = document.querySelector('.task-1__btn');
const iconTaskOne = document.querySelector('.task-1__icon');
const iconTaskOneToggle = document.querySelector('.task-1__icon-toggle');
const svg = document.querySelector('#svg');

btnTaskOne.addEventListener('click', (e) => {
    e.preventDefault();
    iconTaskOneToggle.classList.toggle('show-toggle-icon');
    iconTaskOne.classList.toggle('hide-toggle-icon');
    iconTaskOne.classList.add('animation-bye');
});