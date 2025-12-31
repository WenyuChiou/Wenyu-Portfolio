/**
 * AI Research Assistant - Powered by Google Gemini
 */

class AIChatWidget {
    constructor() {
        this.apiKey = localStorage.getItem('gemini_api_key') || '';
        this.model = 'gemini-1.5-flash';
        this.isOpen = false;
        this.messages = [];
        this.contextData = null;

        this.init();
    }

    async init() {
        // Wait for content data
        if (!window.contentData) {
            setTimeout(() => this.init(), 500);
            return;
        }
        this.contextData = this.processContentData(window.contentData);
        this.renderUI();
        this.attachEvents();
    }

    processContentData(data) {
        // Flatten critical info into a context string
        const lang = localStorage.getItem('selectedLanguage') || 'en';
        let context = `Name: ${data.personal.name[lang]}\n`;
        context += `Role: ${data.personal.title[lang]}\n`;
        context += `Background: ${data.about.paragraphs[lang].join(' ')}\n\n`;

        context += "Projects:\n";
        data.projects.items.forEach(p => {
            context += `- ${p.name[lang]}: ${p.description[lang]} (Tags: ${p.tags.join(', ')})\n`;
        });

        context += "\nPublications:\n";
        data.publications.items.forEach(p => {
            context += `- ${p.title[lang]} (${p.venue})\n`;
        });

        return context;
    }

    renderUI() {
        const div = document.createElement('div');
        div.id = 'ai-chat-widget';
        div.innerHTML = `
            <div class="chat-toggle-btn" id="chatToggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </div>
            
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-title">
                        <span>✨ Research Assistant</span>
                        <div class="status-dot"></div>
                    </div>
                    <button class="close-chat" id="closeChat">×</button>
                </div>
                
                <div class="chat-messages" id="chatMessages">
                    <div class="message ai">
                        Hi! I'm Wenyu's AI assistant. I can explain his research in Agent-Based Modeling or Flood Adaptation. What would you like to know?
                    </div>
                </div>

                <div class="chat-input-area">
                    <div class="api-key-container ${this.apiKey ? 'hidden' : ''}" id="apiKeyContainer">
                        <input type="password" id="apiKeyInput" placeholder="Enter Gemini API Key to test">
                        <button id="saveKeyBtn">Save</button>
                    </div>
                    <div class="input-row">
                        <input type="text" id="userMsgInput" placeholder="Ask a question..." ${!this.apiKey ? 'disabled' : ''}>
                        <button id="sendMsgBtn" ${!this.apiKey ? 'disabled' : ''}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(div);

        // Add styles if not present (handled in style.css, but fallback here)
    }

    attachEvents() {
        const toggle = document.getElementById('chatToggle');
        const windowEl = document.getElementById('chatWindow');
        const close = document.getElementById('closeChat');
        const sendBtn = document.getElementById('sendMsgBtn');
        const input = document.getElementById('userMsgInput');
        const saveKeyBtn = document.getElementById('saveKeyBtn');
        const keyInput = document.getElementById('apiKeyInput');

        toggle.addEventListener('click', () => {
            windowEl.classList.toggle('active');
            toggle.classList.toggle('hidden');
            if (windowEl.classList.contains('active') && this.apiKey) {
                input.focus();
            }
        });

        close.addEventListener('click', () => {
            windowEl.classList.remove('active');
            toggle.classList.remove('hidden');
        });

        // Send Message
        const sendMessage = () => {
            const text = input.value.trim();
            if (!text) return;

            this.addMessage('user', text);
            input.value = '';
            this.generateResponse(text);
        }

        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // API Key
        saveKeyBtn.addEventListener('click', () => {
            const key = keyInput.value.trim();
            if (key) {
                this.apiKey = key;
                localStorage.setItem('gemini_api_key', key);
                document.getElementById('apiKeyContainer').classList.add('hidden');
                input.disabled = false;
                sendBtn.disabled = false;
                this.addMessage('system', 'API Key saved. You can now chat!');
            }
        });
    }

    addMessage(role, text) {
        const container = document.getElementById('chatMessages');
        const div = document.createElement('div');
        div.className = `message ${role}`;
        div.textContent = text;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    async generateResponse(userText) {
        const typingId = 'typing-' + Date.now();
        this.addMessage('ai typing', 'Thinking...');
        const typingEl = document.querySelector('.message.typing');

        try {
            const history = this.messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

            const systemPrompt = `You are a helpful research assistant for Wenyu Chiou. 
            Use the following context about his work to answer the user's question clearly. 
            If the question is technical (e.g., about ABM, Hydrology), explain it simply but accurately.
            
            CONTEXT:
            ${this.contextData}
            `;

            const payload = {
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt + "\n\nUser Question: " + userText }] }
                ]
            };

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            // Remove typing indicator
            if (typingEl) typingEl.remove();

            if (data.error) {
                this.addMessage('ai error', `Error: ${data.error.message}`);
            } else {
                const aiText = data.candidates[0].content.parts[0].text;
                this.addMessage('ai', aiText);
                this.messages.push({ role: 'user', text: userText });
                this.messages.push({ role: 'ai', text: aiText });
            }

        } catch (e) {
            if (typingEl) typingEl.remove();
            this.addMessage('ai error', 'Network error or invalid API key.');
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new AIChatWidget();
});
