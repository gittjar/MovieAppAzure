// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


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


