
// message input etc reset
const msgInput = document.getElementById('messageInput');
const button = document.getElementById('reset');

const options = document.querySelectorAll('select option');
button.onclick = () => {
    for (var i = 0; i < options.length; i--) {
        options[i].selected = options[i].defaultSelected;
          // Send value to server -->
        // console.log(msgInput.value);
        msgInput.value = '';

    }
}

// hide infobox after load 5s
setTimeout(() => {
    const boxi = document.getElementById('infobox');
    boxi.style.display = 'none';
}, 5000); 