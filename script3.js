function list1() { // добавление в список по кнопке и вводу
    const val = document.getElementById('in1').value
    const newitem = document.createElement('li')
    newitem.textContent = val
    document.querySelector('#ulList').appendChild(newitem)
}
function a() {
    console.log('asdasd')
    const a = document.getElementById('a1').value
    console.log(a)
}
for(let i = 0; i !== 20; i++) {
    console.log(i)
}
let av = 'a'
while (av !== 'aaaaaa'){
    console.log(av)
    av += 'a'
}
function str1(){
    let a = document.getElementById('box')
    a.style.flexDirection = 'row'
    console.log(1)
}
function restr(){
    let a = document.getElementById('box')
    a.style.flexDirection = 'row-reverse'
}
function recll(){
    let a = document.getElementById('box')
    a.style.flexDirection = 'column'
}
function recl(){
    let a = document.getElementById('box')
    a.style.flexDirection = 'column-reverse'
}
function start(){
    let a = document.getElementById('box')
    a.style.justifyContent = 'flex-start'
}
function end(){
    let a = document.getElementById('box')
    a.style.justifyContent = 'flex-end'
}
function center(){
    let a = document.getElementById('box')
    a.style.justifyContent = 'center'
}
function around(){
    let a = document.getElementById('box')
    a.style.justifyContent = 'space-around'
}
function between(){
    let a = document.getElementById('box')
    a.style.justifyContent = 'space-between'
}
function stre(){
    let a = document.getElementById('box')
    a.style.alignItems = 'stretch'
}
function fstart(){
    let a = document.getElementById('box')
    a.style.alignItems = 'flex-start'
}
function fend(){
    let a = document.getElementById('box')
    a.style.alignItems = 'flex-end'
}
function fcenter(){
    let a = document.getElementById('box')
    a.style.alignItems = 'center'
}