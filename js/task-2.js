'use strict';
/*jshint -W097*/

const btnTaskTwo = document.querySelector('.task-2__btn');

btnTaskTwo.addEventListener('click', () => {
    alert(`Ваше устройство имеет разрешение ширины: ${window.screen.width}px, и разрешение высоты: ${window.screen.height}px.`);
});