

function MyFunction() {
    let elem = document.getElementById('head');
    let val1 = elem.outerHTML
    if (elem.value !=="Head 0/35") {
        let num1 = val1.substring(53, 55);
        let num2 = parseInt(num1);
        num2 = num2 - 1
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
    let val1 = elem.outerHTML
    let num1 = val1.substring(61, 63);
    let num2 = parseInt(num1);
    num2 = num2 - 1
    if (elem.value !=="Left Arm 0/60") {
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
    let val1 = elem.outerHTML
    let num1 = val1.substring(63, 65);
    let num2 = parseInt(num1);
    num2 = num2 - 1
    if (elem.value !=="Right Arm 0/60") {
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
    let val1 = elem.outerHTML
    let num1 = val1.substring(58, 60);
    let num2 = parseInt(num1);
    num2 = num2 - 1
    if (elem.value !=="Thorax 0/85") {
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
    let val1 = elem.outerHTML
    let num1 = val1.substring(60, 62);
    let num2 = parseInt(num1);
    num2 = num2 - 1
    if (elem.value !=="Stomach 0/70") {
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
    let val1 = elem.outerHTML
    let num1 = val1.substring(60, 63);
    let num2 = parseInt(num1);
    num2 = num2 - 1
    if (elem.value !=="Left Leg 0/65") {
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
    let val1 = elem.outerHTML
    let num1 = val1.substring(63, 65);
    let num2 = parseInt(num1);
    num2 = num2 - 1
    if (elem.value !=="Right Leg 0/65") {
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