
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
const boxi = document.getElementById('infobox');
let opacity = 1;
const reduceOpacity = setInterval(() => {
    if (opacity > 0) {
        opacity = opacity - 0.1;
        boxi.style.opacity = opacity;
    } else {
        clearInterval(reduceOpacity);
        boxi.style.display = 'none';
    }
}, 500);

setTimeout(() => {
    clearInterval(reduceOpacity);
    boxi.style.display = 'none';
}, 5000);

// Button click handlers
document.getElementById("greenButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lightgreen";
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "olive";
    }

    // Change table background and text color
    var table = document.getElementById("movieTable");
    table.style.backgroundColor = "black";
    table.style.color = "lightgreen";
});

document.getElementById("fontButton").addEventListener("click", function () {
    document.body.style.fontFamily = "Roboto, sans-serif";
    document.body.style.fontSize = "18px";
});

document.getElementById("resetButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.body.style.fontFamily = "";
    document.body.style.fontSize = "";
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "";
    }
    // Reset table background and text color
    var table = document.getElementById("movieTable");
    table.style.backgroundColor = "";
    table.style.color = "";

});
