function makeBubble(text, className) {
    const elt = document.createElement('div');
    elt.innerHTML = text;
    elt.classList.add('message');
    elt.classList.add(className);
    return elt;
}
for (let i=0; i<20; i++) {
    document.getElementsByClassName('container')[0].appendChild(makeBubble("test", "message-you"));
    document.getElementsByClassName('container')[0].appendChild(makeBubble("test", "message-them"));
}