const sendBtn=document.getElementById('send-button');
const userInput=document.getElementById('user-input');
const chatContainer=document.getElementById('chat-box');

sendBtn.addEventListener('click', () => {
    const userMessage=userInput.value.trim();
    if(userMessage){
        addMessage(userMessage, 'user');
        userInput.value='';
        setTimeout(() => {
            const botResponse=generateBotResponse(userMessage);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
});

function addMessage(message, sender){
    const messageElement=document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent=message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop=chatContainer.scrollHeight;
}

function generateBotResponse(userMessage){
    const responses=[
        "That's interesting! Tell me more.",
        "I see. What else can you share?",
        "Can you explain that further?",
        "Why do you think that is?",
        "How does that make you feel?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
