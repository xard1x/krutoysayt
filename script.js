let maladec = 0;
const b = 'кто прочитал тот какашка';
console.log(b);
let result = prompt('ты любишь собачек?');
if (result === 'да'){
    alert('ты маладец');
    maladec = maladec + 1;
} else if (result === 'не знаю') {
    alert('ну ну');
} else {
    alert('фу боже');
    maladec = maladec - 1;
}
function da() {
    document.getElementById('vop').innerHTML= 'правильно, их все любят';
    maladec = maladec + 1;
    const d3 = document.getElementById('a1')
    const d4 = document.getElementById('a2')
    d3.remove()
    d4.remove()
    if (maladec >= 3) {
        alert('ты крутой прям - вот твой код 159')
    } else if (maladec === 2) {
        alert('давай подожми я верю чтоты будешь крутым - вот твой код 145')
    } else {
        alert('капиц ты лох - вот твой код 123')
    }
}
function net() {
    document.getElementById('vop').innerHTML= 'ты что тупой, написано же что ты их любишь';
    maladec = maladec - 1;
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
    maladec = maladec - 1;
    const d2 = document.getElementById('a4')
    const d1 = document.getElementById('a3')
    d2.remove()
    d1.remove()
}
function dar1(){
     el = document.querySelector('body')
     el.style.background = 'black'
     el.style.color = 'white'
     fo = document.getElementById('fon')
    fo.style.color = 'white'
    fo1 = document.getElementById('fon1')
    fo1.style.color = 'white'
}
function whi1(){
    el = document.querySelector('body')
    el.style.background = 'white'
    el.style.color = 'black'
    fo = document.getElementById('fon')
    fo.style.color = 'black'
    fo1 = document.getElementById('fon1')
    fo1.style.color = 'black'
}
