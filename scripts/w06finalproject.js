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

fetch('prophets.json')
  .then(response => response.json())
  .then(data => {
    const prophets = data.prophets_js;

    prophets.forEach(prophet => {
      console.log(`Contribution: ${prophet.contribution}`);
      console.log("---------------------");
    });
  })
  .catch(error => console.error('Ocorreu um erro ao obter os dados:', error));


function sendMessage(message) {
    var chatMessages = document.getElementById("chat-messages");
    var userMessage = "<div><strong>Você:</strong> " + message + "</div>";
    chatMessages.innerHTML += userMessage;

    // Respostas pré-definidas
    var botMessage;
    switch(message) {
        case 'Joseph Smith Jr':
            botMessage = "<div><strong>Bot:</strong> Date of Birth: December 23, 1805. \Date of Death: June 27, 1844.</div>";
            
            break;
        case 'Wilford Woodruff':
            botMessage = "<div><strong>Bot:</strong> Date of Birth: March 1, 1807. \Date of Death: September 2, 1898.</div>";
            break;
        case 'Russell M. Nelson':
            botMessage = "<div><strong>Bot:</strong> Date of Birth: September 9, 1924. \Prophesied from 2018 to the present.</div>";
            break;
        default:
            botMessage = "<div><strong>Bot:</strong> Desculpe, não entendi.</div>";
            break;
    }
    chatMessages.innerHTML += botMessage;

    // Scroll automático
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        var userInput = document.getElementById("user-input");
        sendMessage(userInput.value);
        userInput.value = "";
    }
}