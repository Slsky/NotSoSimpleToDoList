function list(e) {

    let li = listElement({
        textElement: textElement(),
        inputElement: inputElement(),
        buttonElement: buttonElement()
    });

    root.insertAdjacentHTML('beforeend', li);
};

function listElement(obj) {
    return `
        <li class="item">
            ${obj.inputElement}
            ${obj.textElement}
            ${obj.buttonElement}
        </li>`;
}

function getText() {
    let text = input.value;
    text = text.length > 50 ? text.slice(0, 50) + "..." : text;
    return text;
}

function inputElement() {
    return `<input type="checkbox" onchange="chacked(this)">`
}

function textElement() {
    let text = getText()
    return `<span class="text">${text}</span>`
}

function buttonElement() {
    return `<button class="to-end del" onclick="remove(this)">del</button>`
}

function chacked(e) {
    e.nextElementSibling.classList.toggle("crossed");
    e.parentNode.classList.toggle("blue");
}

function add(e) {
    list(e);
    e.preventDefault();
};

function remove(e) {
    e.parentNode.remove();
}

function amountCards(e) {
    let len = document.querySelectorAll("li").length;
    amount.innerText = `Cards: ${len}`;
}

setInterval(amountCards, 1000)

let form = document.getElementById('submit');
form.addEventListener("submit", add);

