usernameBox = document.querySelector("#username_box");
messagebox = document.querySelector("#message_box");
sendButton = document.querySelector("#send");
chats = document.querySelector("#chat_window");

var messageseRef = null;

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

    if (messagesRef === null) {
        return;
    }

    messagesRef.push({
        username: username,
        message: message
    });

    messagebox.value = "";
}

sendButton.addEventListener('click', send);
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        send();
    }
})


document.addEventListener('DOMContentLoaded', function() {
    messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
        console.dir(snapshot);
        chats.innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            convo = childSnapshot.val();
            console.log(convo);
            HTML = getMessageHTML(convo['username'], convo['message']);
            chats.innerHTML += HTML;
        })
        allP = document.querySelectorAll(".text")
        allP[allP.length - 1].scrollIntoView();
    })
});