function list(e) {

    let li = listElement({
        textElement: textElement,
        inputElement: inputElement,
        buttonElement: buttonElement
    });

    root.insertAdjacentHTML('beforeend', li);
};

function listElement(obj) {
    return `
        <li class="item">
            ${obj.inputElement()}
            ${obj.textElement()}
            ${obj.buttonElement()}
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
    return `<button class="to-end btn-del" onclick="remove(this)">X</button>`
}

function chacked(e) {
    console.log('e.nextElementSibling.classList', e.nextElementSibling.classList)
    e.parentNode.classList.toggle("blue");
    console.log('e.ne', e.nextElementSibling)
    // e.nextElementSibling.classList.toggle("");
    e.nextElementSibling.classList.toggle("crossed");
}

function add(e) {
    list(e);
    amountCards(len++);
    e.preventDefault();
}

function remove(e) {
    amountCards(len--);
    e.parentNode.remove();
}

function amountCards(e) {
    amount.innerText = `Cards: ${len}`;
}

let form = document.getElementById('submit');
form.addEventListener("submit", add);

let len = document.querySelectorAll("li").length;
amountCards(len);