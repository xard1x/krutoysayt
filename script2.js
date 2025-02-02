let maladec = 0;
function plus(){
    maladec += 1
}
function minus(){
    maladec -= 1
}
function parol() {
    const po = document.getElementById('in1')
    const p = document.getElementById('in1').value
    const p12 = document.getElementById('in12')
    const b1 = document.getElementById('b1')
    p12.innerHTML = p + ' - прикольный пароль'
    if (p === '42') {
        plus()
        console.log(maladec)
    }
    po.remove()
    b1.remove()
}
function tesamie() {
    const del1 = document.getElementById('in12')
    const p2 = document.getElementById('in2').value
    const p22 = document.getElementById('in22')
    const p2o = document.getElementById('in2')
    const b2 = document.getElementById('b2')
    p22.innerHTML = 'я запомнил '
    if (p2 === 'да') {
        plus()
        console.log(maladec)
    }
    p2o.remove()
    b2.remove()
    del1.remove()
}
function dr() {
    const del21 = document.getElementById('delete')
    const del2 = document.getElementById('in22')
    const p3o = document.getElementById('in3')
    const p3 = document.getElementById('in3').value
    const p32 = document.getElementById('in32')
    const b3 = document.getElementById('b3')
    if (p3 === '2012-09-14') {
        p32.innerHTML = 'ебат ты владка чтоле'
        plus()
        console.log(maladec)
    } else {
        p32.innerHTML = 'панятна панятна'
    }
    p3o.remove()
    b3.remove()
    del2.remove()
    del21.remove()
}
function col(){
    const del3 = document.getElementById('in32')
    const del31 = document.getElementById('delete1')
    const p4 = document.getElementById('in4').value
    const p42 = document.getElementById('in42')
    const p4o = document.getElementById('in4')
    const b4 = document.getElementById('b4')
    if (p4 === '#00ffff') {
        p42.innerHTML = 'ой ты прям как владка'
        plus()
        console.log(maladec)
    }
    p4o.remove()
    b4.remove()
    del3.remove()
    del31.remove()
}
function ran(){
    const del4 = document.getElementById('in42')
    const del41 = document.getElementById('delete2')
    const p5 = document.getElementById('in5').value
    const p52 = document.getElementById('in52')
    const p5o = document.getElementById('in5')
    const b5 = document.getElementById('b5')
    if (p5 === '100') {
        p52.innerHTML = 'ты крутой'
        plus()
        console.log(maladec)
    }
    p5o.remove()
    b5.remove()
    del4.remove()
    del41.remove()
}
function sel(){
    const del5 = document.getElementById('in52')
    const del51 = document.getElementById('delete3')
    const p6 = document.getElementById('in6').value
    const p62 = document.getElementById('in62')
    const p6o = document.getElementById('in6')
    const b6 = document.getElementById('b6') 
    if (p6 === 'купить макбук') {
        p62.innerHTML = 'богатый чтоле'
        plus()
        console.log(maladec)
    } else if (p6 === 'купить игровой ноут') {
        p62.innerHTML = 'тупой чтоле'
        minus()
        console.log(maladec)
    } else {
        p62.innerHTML = 'маладец'
        plus()
        console.log(maladec)
    }
    p6o.remove()
    b6.remove()
    del5.remove()
    del51.remove()
}
function kod(){
    const del6 = document.getElementById('in62')
    const p7 = document.getElementById('in7').value
    const p7o = document.getElementById('in7')
    const b7 = document.getElementById('b7')
    if (p7 === '159') {
        maladec += 3
        console.log(maladec)
        del6.remove()
        p7o.remove()
        b7.remove()
    } else if (p7 === '145') {
        plus()
        console.log(maladec)
        del6.remove()
        p7o.remove()
        b7.remove()
    } else if (p7 === '123') {
        minus()
        console.log(maladec)
        del6.remove()
        p7o.remove()
        b7.remove()
    } else {
        alert('нету такого кода')
    }
}