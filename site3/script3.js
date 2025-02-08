function list1() {
    const val = document.getElementById('in1').value
    console.log(val)
    const newitem = document.createElement('li')
    newitem.textContent = val
    document.querySelector('#ulList').appendChild(newitem)
}