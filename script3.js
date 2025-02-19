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
function str(){
    let a = document.getElementById('box')
    a.style.flexDirection = 'row'
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