const chatbotBtn = document.querySelector('.btn-chatbot');
const closeBtn = document.querySelector('.btn-cross');
const chatbotMsg = document.querySelector('.msg-chatbot');

// Shake the message box
setInterval(() => {
    chatbotMsg.classList.toggle('shake-animation');
}, 1500);

// Close the bot message
closeBtn.addEventListener('click', () => {
    closeBtn.style.transition = 'opacity 0.2s ease';
    closeBtn.style.opacity = '0'
    chatbotMsg.style.transition = 'width 0.2s ease, padding 0.1s ease, height 0.2s ease-in';
    chatbotMsg.style.width = '0';
    chatbotMsg.style.height = '0';
    chatbotMsg.style.padding = '0';
    chatbotMsg.querySelector('span').style.fontSize = '0';
    setTimeout(() => {
        chatbotMsg.style.display = 'none';
        closeBtn.style.display = 'none';
    }, 300);
});