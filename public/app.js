usernameBox = document.querySelector("#username_box");
messagebox = document.querySelector("#message_box");
sendButton = document.querySelector("#send");
chats = document.querySelector("#window");

function getMessageHTML(username, message) {
    return "<div class=\"message\">  " +
        "<span class = \"speaker\">" +
        username +
        ": </span> " +
        "<span class = \"text\">" +
        message +
        "</span> " +
        "</div>";
}

function send() {
    username = usernameBox.value;
    if (username === "") {
        alert("Username is required!");
        return;
    }
    message = messagebox.value;
    if (message === "") {
        return;
    }
    messageHTML = getMessageHTML(username, message);
    chats.innerHTML += messageHTML;
    messagebox.value = "";
}

sendButton.addEventListener('click', send);
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        send();
    }
})