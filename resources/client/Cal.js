function MyFunction() {
    const elem = document.getElementById('head');

    if (elem.value==="Head 35/35") {
        elem.value = "Head 34/35";
        elem.innerHTML = "Head 34/35";
    }
    else {
        elem.value = "Shitty Test";
        elem.innerHTML = "Shitty Test";
    }
}

