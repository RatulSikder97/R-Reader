function createNewElement(name) {
    return document.createElement(name)
}


function loadComponentContent(file, element) {
    fetch(file).then((res) => {
        return res.text();
    }).then((data) => {
        element.innerHTML = data;
    });
}