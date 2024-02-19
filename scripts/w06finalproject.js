const chatTab = document.getElementById('chatTab');
const chatContainer = document.getElementById('chatContainer');

let isChatOpen = false;

chatTab.addEventListener('click', () => {
  isChatOpen = !isChatOpen;
  if (isChatOpen) {
    chatContainer.style.display = 'block';
  } else {
    chatContainer.style.display = 'none';
  }
});

let prophetsData; // Variable to store the data of the prophets

fetch("prophets.JSON")
  .then(response => response.json())
  .then(data => {
    prophetsData = data.prophets_js; // Store the data of the prophets in the prophetsData variable
  })
  .catch(error => console.error('An error occurred while getting the data:', error));

function sendMessage(message) {
    var chatMessages = document.getElementById("chat-messages");
    var userMessage = "<div><strong>You:</strong> " + message + "</div>";
    chatMessages.innerHTML += userMessage;

    // Check if the name entered by the user matches any prophet
    const prophet = prophetsData.find(p => p.name === message);
    if (prophet) {
        // If it matches, display the botMessage and contribution information
        var botMessage = "<div><strong>Bot:</strong> " + prophet.botMessage + "</div>";
        botMessage += "<div><strong>Contribution:</strong> " + prophet.contribution + "</div>";

        // Display the search date after the bot's response
        fetch('http://worldtimeapi.org/api/ip')
          .then(response => response.json())
          .then(data => {
            const currentDateTime = new Date(data.datetime);
            var searchDate = "<div><strong>Search Date:</strong> " + currentDateTime.toLocaleString() + "</div>";
            chatMessages.innerHTML += searchDate;
          })
          .catch(error => console.error('An error occurred while getting the date and time:', error));
    } else {
        // If it doesn't match, display an error message
        var botMessage = "<div><strong>Bot:</strong> Sorry, I couldn't find information about that prophet.</div>";
    }
    
    chatMessages.innerHTML += botMessage;

    // Automatic scrolling
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        var userInput = document.getElementById("user-input");
        sendMessage(userInput.value);
        userInput.value = "";
    }
}
