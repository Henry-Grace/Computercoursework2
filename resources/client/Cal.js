

function MyFunction() {
    const elem = document.getElementById('head');
    let val1 = elem
    if (val1.value==="Head 35/35") {
        let word1 = "Head "
        let word2 = "34"
        let word3 = "/35"
        let cent = word1 + word2 +word3;
        elem.value = cent;
        elem.innerHTML = cent;
    }
    else {
        elem.value = "Shitty Test";
        elem.innerHTML = "Shitty Test";
    }
}

