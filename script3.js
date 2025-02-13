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