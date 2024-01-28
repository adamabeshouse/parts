function makeBubble(text, className) {
    const elt = document.createElement('div');
    elt.innerHTML = text;
    elt.classList.add('message');
    elt.classList.add(className);
    return elt;
}
for (let i=0; i<20; i++) {
    //document.getElementsByClassName('messages-container')[0].appendChild(makeBubble("I said this", "message-you"));
    //document.getElementsByClassName('messages-container')[0].appendChild(makeBubble("part said THAT", "message-them"));
}

function addMessage() {
    const text = document.getElementById("input").value;
    if (!text.length) return;
    document.getElementsByClassName('messages-container')[0].appendChild(makeBubble(text, "message-you"));
    document.getElementById("input").value = "";
    setTimeout(()=>{
        document.getElementsByClassName('messages-container')[0].scrollTop = 
        document.getElementsByClassName('messages-container')[0].scrollHeight;
    });
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
}