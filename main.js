function makeBubble(text, className) {
    const elt = document.createElement('div');
    elt.innerHTML = text;
    elt.classList.add('message');
    elt.classList.add(className);
    return elt;
}
for (let i=0; i<20; i++) {
    document.getElementsByClassName('messages-container')[0].appendChild(makeBubble("test", "message-you"));
    document.getElementsByClassName('messages-container')[0].appendChild(makeBubble("test", "message-them"));
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