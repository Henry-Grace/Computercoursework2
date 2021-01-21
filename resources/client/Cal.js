

function MyFunction() {
    let elem = document.getElementById('head');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(53, 55);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Head "
        let word3 = "/35"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}

function MyFunction1() {
    let elem = document.getElementById('leftArm');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(61, 63);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Left Arm "
        let word3 = "/60"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}

function MyFunction2() {
    let elem = document.getElementById('rightArm');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(63, 65);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Right Arm "
        let word3 = "/60"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}

function MyFunction3() {
    let elem = document.getElementById('thorax');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(58, 60);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Thorax "
        let word3 = "/85"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}

function MyFunction4() {
    let elem = document.getElementById('stomach');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(60, 62);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Stomach "
        let word3 = "/70"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}

function MyFunction5() {
    let elem = document.getElementById('leftLeg');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(60, 63);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Left Leg "
        let word3 = "/65"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}

function MyFunction6() {
    let elem = document.getElementById('rightLeg');
    let arm = document.getElementById('Armour')
    let bul = document.getElementById('bullet')
    let arm1 = arm.value
    let dur = arm1.substring(0, 2);
    let cla = arm1.substring(4);
    let dur1 = parseInt(dur)
    let cla1 = parseInt(cla)
    let bul1 = bul.value
    let dam = bul1.substring(0, 2);
    let pen = bul1.substring(3, 5);
    let dam1 = parseInt(dam)
    let pen1 = parseInt(pen)
    let val1 = elem.outerHTML
    let num1 = val1.substring(63, 65);
    let num2 = parseInt(num1);
    let cla2 = cla1*4;
    if (cla2 > pen1) {
        dam1 = dam1/4;
    }
    else {
        dur1 = dur1 - pen1;
    }
    let total = dam1 - dur1;
    num2 = num2 - total
    if (num2 > 0) {
        let word2 = num2
        let word1 = "Right Leg "
        let word3 = "/65"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        document.location="Dead.html"
    }
}