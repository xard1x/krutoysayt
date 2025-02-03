let maladec = 0; // создание переменой с счетчиком(изменяемая)
const b = 'кто прочитал тот какашка'; // переменая(не изменяемая)
console.log(b); // вывод в консоль
let result = prompt('ты любишь собачек?'); // ввод пользователя через уведомление
if (result === 'да'){ // условия ответа на let result = prompt('ты любишь собачек?')
    alert('ты маладец');
    maladec = maladec + 1;
} else if (result === 'не знаю') {
    alert('ну ну');
} else {
    alert('фу боже');
    maladec = maladec - 1;
}
function da() {  // функция обрабатывающая нажатие кнопки да
    document.getElementById('vop').innerHTML= 'правильно, их все любят'; // получение доступа к элементу по айди и изменение его текста
    maladec = maladec + 1; // увелечение переменной счетчика
    const d3 = document.getElementById('a1') // получение доступа к элементу и записывание его в переменную
    const d4 = document.getElementById('a2')
    d3.remove() // удаление элемента
    d4.remove()
    if (maladec >= 3) {   //  условие количества очков в переменной  maladec
        alert('ты крутой прям - вот твой код 159')
    } else if (maladec === 2) {
        alert('давай подожми я верю чтоты будешь крутым - вот твой код 145')
    } else {
        alert('капиц ты лох - вот твой код 123')
    }
}
function net() { // функция обрабатывающая нажатие кнопки  не
    document.getElementById('vop').innerHTML= 'ты что тупой, написано же что ты их любишь';
    const d3 = document.getElementById('a1')
    const d4 = document.getElementById('a2')
    d4.remove()
    d3.remove()
    if (maladec >= 3) {
        alert('ты крутой прям - вот твой код 159')
    } else if (maladec === 2) {
        alert('давай подожми я верю чтоты будешь крутым - вот твой код 145')
    } else {
        alert('капиц ты лох - вот твой код 123')
    }
}
function da1() {
        document.getElementById('vop1').innerHTML= 'красава';
        maladec = maladec + 1;
        const d2 = document.getElementById('a4')
        const d1 = document.getElementById('a3')
        d1.remove()
        d2.remove()
}
function net1() {
    document.getElementById('vop1').innerHTML= 'я тебя запомнил';
    const d2 = document.getElementById('a4')
    const d1 = document.getElementById('a3')
    d2.remove()
    d1.remove()
}
function dar1(){ // функция которая делает темную тему
     el = document.querySelector('body')
     el.style.background = 'black'  // изменение цвета фона
     el.style.color = 'white' // изменение цвета
     fo = document.getElementById('fon')
    fo.style.color = 'white'
    fo1 = document.getElementById('fon1')
    fo1.style.color = 'white'
}
function whi1(){ // йункция которая делает светлую тему
    el = document.querySelector('body')
    el.style.background = 'white'
    el.style.color = 'black'
    fo = document.getElementById('fon')
    fo.style.color = 'black'
    fo1 = document.getElementById('fon1')
    fo1.style.color = 'black'
}
