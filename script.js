let maladec = 0
const b = 'кто прочитал тот какашка';
console.log(b);
let result = prompt('ты пидор?');
if (result === 'да'){
    alert('ты маладец')
    maladec = maladec + 1
} else if (result === 'не знаю') {
    alert('ну ну')
} else {
    alert('фу боже')
    maladec = maladec - 1
}
function da() {
    alert('маладец, он тот еще пидар')
    document.getElementById('vop').innerHTML= 'сигма'
    maladec = maladec + 1
    console.log(maladec)
}
function net() {
    alert('ты что долбоеб написано же что он пидар')
    document.getElementById('vop').innerHTML= 'да ты сам пидар сто проц'
    maladec = maladec - 1
    console.log(maladec)
}
