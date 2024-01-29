// ~ Rendering ~
function makeBubble(text, className) {
    const elt = document.createElement('div');
    elt.innerHTML = text;
    elt.classList.add('message');
    elt.classList.add(className);
    return elt;
}

function addMessage(text, className) {
    document.getElementsByClassName('messages-container')[0].appendChild(makeBubble(text, className));
    document.getElementById("input").value = "";
    setTimeout(()=>{
        document.getElementsByClassName('messages-container')[0].scrollTop = 
        document.getElementsByClassName('messages-container')[0].scrollHeight;
    });
}

// ~ Saving ~
function saveInput() {
    localStorage.setItem("savedInput", document.getElementById("input").value);
}

function saveMessages() {
    const messages = document.getElementsByClassName("message");
    const toSave = [];
    for (let i=0; i<messages.length; i++) {
        toSave.push({
            text: messages[i].innerHTML,
            fromYou: messages[i].classList.contains("message-you")
        });
    }
    localStorage.setItem("savedMessages", JSON.stringify(toSave));
}

// ~ Event handlers ~
function onSendMessage() {
    const text = document.getElementById("input").value;
    if (!text.length) return;
    addMessage(text, "message-you");
    saveMessages();
}

function switchSpeaker() {
    const messages = document.getElementsByClassName("message");
    for (let i=0; i<messages.length; i++) {
        if (messages[i].classList.contains("message-you")) {
            messages[i].classList.remove("message-you");
            messages[i].classList.add("message-them");
        } else {
            messages[i].classList.remove("message-them");
            messages[i].classList.add("message-you");
        }
    }
    saveMessages();
}

function onClickHeader(event) {
    event.stopPropagation();
    document.getElementsByClassName("header-container")[0].classList.add("header-container-focused");
}
document.getElementsByClassName("header-container")[0].addEventListener("click", onClickHeader);

function onClickOutsideHeader() {
    document.getElementsByClassName("header-container")[0].classList.remove("header-container-focused");
}

// ~ Execute on page load ~

// Load from localStorage if it exists
const savedMessages = localStorage.getItem("savedMessages");
if (savedMessages) {
    for (const message of JSON.parse(savedMessages)) {
        addMessage(message.text, message.fromYou ? "message-you" : "message-them");
    }
}
const savedInput = localStorage.getItem("savedInput");
document.getElementById("input").value = savedInput || "";