'use strict';
/*jshint -W097*/

const input = document.querySelector('#message');
const btnSend = document.querySelector('#send');
const btnGeolocation = document.querySelector('#geolocation');
const area = document.querySelector('.chat-websocket__area-discuss');

const wsUrl = "wss://echo-ws-service.herokuapp.com/";

let websocket = new WebSocket(wsUrl); //помещаем URL вебсокета в объект-конструктор, чтоб работать с ним

function smsForChat(message, choice) {
    let sms = `<div class=${choice ? "sent-server" : "sent-user"}><p>${message}</p></div>`;
    area.innerHTML += sms;
}

function geolocationForChat(link) {
    let sms = `<div class="geolocation-task-3"><a target='_blank' href="${link}">Гео-локация</a></div>`;
    area.innerHTML += sms;
}

websocket.onopen = () => { //сработает, если соединение открыто
    input.placeholder = 'Здесь вводится текст сообщения';
};

websocket.onerror = () => { //сработает в случае ошибки
    input.placeholder = "При передаче данных произошла ошибка";
};

websocket.onmessage = (event) => { //сообщение, которые мы получим от сервера
    smsForChat(event.data, true);
};

btnSend.addEventListener('click', () => {
    if (input.value) { //если будет пустая строка, то false
        websocket.send(input.value);
        smsForChat(input.value, false);
        input.value = '';
    }
});

btnGeolocation.addEventListener('click', () => {
    if ('geolocation' in navigator) { //если брузер поддерживает геолокацию
        navigator.geolocation.getCurrentPosition((data) => { //в случае согласия пользователя получим объект с данными
            let latitude = data.latitude;
            let longitude = data.longitude;

            let link = `https://yandex.ru/maps/?ll=${latitude}.457439&z=${longitude}`;
            geolocationForChat(link);
        });
    }
});