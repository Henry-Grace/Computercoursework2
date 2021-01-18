

function MyFunction() {
    const elem = document.getElementById('head');
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
        elem.value = "DEAD";
        elem.innerHTML = "DEAD";
    }
}

