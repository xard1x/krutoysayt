let maladec = 0;
const b = 'кто прочитал тот какашка';
console.log(b);
let result = prompt('ты пидор?');
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
    document.getElementById('vop').innerHTML= 'правильно, он тот еще пидар';
    maladec = maladec + 1;
}
function net() {
    document.getElementById('vop').innerHTML= 'ты что долбоеб написано же что он пидар';
    maladec = maladec - 1;
}
function da1() {
        document.getElementById('vop1').innerHTML= 'красава';
        maladec = maladec + 1;
}
function net1() {
    document.getElementById('vop1').innerHTML= 'я тебя запомнил';
    maladec = maladec - 1;
}
function dark1() {
    console.log('asdsadsadsa')
    const dar = document.querySelector('body')
    dar.style.backgroundColor = 'black';
}