document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const typingIndicator = document.getElementById('typing-indicator');

    let isFirstOpen = true;

    // Toggle Chatbot
    const toggleChat = () => {
        chatbotWindow.classList.toggle('hidden');
        if (!chatbotWindow.classList.contains('hidden') && isFirstOpen) {
            isFirstOpen = false;
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    addBotMessage("Hello! 👋 I'm Nexus Assistant. How can I help you today?", true);
                }, 1000);
            }, 500);
        }
    };

    chatbotToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);

    // Initial Options
    const quickOptions = [
        "Take a Tour",
        "Need Support",
        "Pricing Info"
    ];

    // Scroll to bottom
    const scrollToBottom = () => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Add Message Node
    const appendMessage = (text, sender, isHTML = false) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        
        if (isHTML) {
            msgDiv.innerHTML = text;
        } else {
            msgDiv.textContent = text;
        }
        
        chatMessages.appendChild(msgDiv);
        scrollToBottom();
        return msgDiv;
    };

    // Bot message with optional quick replies
    const addBotMessage = (text, showOptions = false) => {
        const msgDiv = appendMessage(text, 'bot');
        
        if (showOptions) {
            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('quick-replies');
            
            quickOptions.forEach(opt => {
                const btn = document.createElement('button');
                btn.classList.add('quick-reply-btn');
                btn.textContent = opt;
                btn.onclick = () => handleQuickReply(opt, optionsDiv);
                optionsDiv.appendChild(btn);
            });
            
            chatMessages.appendChild(optionsDiv);
            scrollToBottom();
        }
    };

    // Handle Quick Replies
    const handleQuickReply = (option, optionsContainer) => {
        optionsContainer.style.display = 'none'; // Hide options once selected
        addUserMessage(option);
        processBotResponse(option);
    };

    // User Message
    const addUserMessage = (text) => {
        appendMessage(text, 'user');
    };

    // Typing Indicator Logic
    const showTypingIndicator = () => {
        typingIndicator.classList.remove('hidden');
        scrollToBottom();
    };

    const hideTypingIndicator = () => {
        typingIndicator.classList.add('hidden');
    };

    // Process Response (Mock Logic)
    const processBotResponse = (userInput) => {
        showTypingIndicator();
        
        const lowerInput = userInput.toLowerCase();
        let response = "";
        let showOptions = false;
        
        setTimeout(() => {
            hideTypingIndicator();
            
            if (lowerInput.includes('tour') || lowerInput.includes('walkthrough')) {
                response = "Great! Our portal features an intelligent AI dashboard, lightning-fast analytics, and top-tier security. Would you like to read the documentation or talk to sales?";
                const customOptionsDiv = document.createElement('div');
                customOptionsDiv.classList.add('quick-replies');
                ['Documentation', 'Talk to Sales', 'Main Menu'].forEach(opt => {
                    const btn = document.createElement('button');
                    btn.classList.add('quick-reply-btn');
                    btn.textContent = opt;
                    btn.onclick = () => handleQuickReply(opt, customOptionsDiv);
                    customOptionsDiv.appendChild(btn);
                });
                appendMessage(response, 'bot');
                chatMessages.appendChild(customOptionsDiv);
                scrollToBottom();
                return;
            } else if (lowerInput.includes('support')) {
                response = "I can definitely help with support. Are you experiencing issues with your account, billing, or technical integration?";
            } else if (lowerInput.includes('pricing')) {
                response = "Our pricing scales with your needs! We have a Starting Plan for free, and Premium Plans starting at $49/mo. Connect with our sales team to arrange a custom plan.";
            } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                response = "Hi there! How can I assist you today?";
                showOptions = true;
            } else if (lowerInput.includes('main menu')) {
                response = "Here are the main options:";
                showOptions = true;
            } else {
                response = "I'm a virtual mock assistant, so I don't understand everything yet! Want to see the main options?";
                showOptions = true;
            }

            addBotMessage(response, showOptions);
            
        }, 1500 + Math.random() * 1000); // Random delay between 1.5s - 2.5s
    };

    // Form Submit Handler
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (text) {
            addUserMessage(text);
            chatInput.value = '';
            processBotResponse(text);
        }
    });

    // Enter key submit inside input
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });
});
