let maladec = 0
function parol() {
    const po = document.getElementById('in1')
    const p = document.getElementById('in1').value
    const p12 = document.getElementById('in12')
    const b1 = document.getElementById('b1')
    p12.innerHTML = p + ' - прикольный пароль'
    if (p === 42) {
        maladec = maladec + 1
    }
    po.remove()
    b1.remove()
}
function tesamie() {
    const p2 = document.getElementById('in2').value
    const p22 = document.getElementById('in22')
    const p2o = document.getElementById('in2')
    const b2 = document.getElementById('b2')
    p22.innerHTML = 'я запомнил '
    if (p2 === 'да') {
        maladec = maladec + 1
    }
    p2o.remove()
    b2.remove()
}
function dr() {
    const p3o = document.getElementById('in3')
    const p3 = document.getElementById('in3').value
    const p32 = document.getElementById('in32')
    const b3 = document.getElementById('b3')
    if (p3 === '2012-09-14') {
        p32.innerHTML = 'ебат ты владка чтоле'
        maladec = maladec + 1
    } else {
        p32.innerHTML = 'панятна панятна'
    }
    p3o.remove()
    b3.remove()
}
function col(){
    const p4 = document.getElementById('in4').value
    const p42 = document.getElementById('in42')
    const p4o = document.getElementById('in4')
    const b4 = document.getElementById('b4')
    if (p4 === '#00ffff') {
        p42.innerHTML = 'ой ты прям как владка'
        maladec = maladec + 1
    }
    p4o.remove()
    b4.remove()
}
