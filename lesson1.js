// ================= DATA: LESSON 1 - ABOUT ME =================
const lessonData = {
    title: "About Me",
    subtitle: "The Story Behind My Name & Who I Am",
    theme: "Coffee Club ☕",
    goal: "To confidently tell your story: your name, background, where you're from, and what makes you unique",
    
    vocab: [
        { word: "to go by", def: "to use a specific name or nickname", ex: "My name is Alexander, but I go by Alex." },
        { word: "to be named after", def: "to receive the same name as someone else", ex: "I was named after my grandmother." },
        { word: "namesake", def: "a person with the same name as another", ex: "My namesake is a famous writer from the 19th century." },
        { word: "to carry a legacy", def: "to represent family history or traditions", ex: "As the eldest, I feel I carry a legacy." },
        { word: "to live up to", def: "to meet expectations", ex: "I hope I can live up to my parents' expectations." },
        { word: "roots", def: "family origins or cultural background", ex: "I'm proud of my roots and where I come from." },
        { word: "to shape who I am", def: "to influence your personality/identity", ex: "My travels really shaped who I am today." },
        { word: "background", def: "your history, experiences, upbringing", ex: "People from different backgrounds bring unique perspectives." },
        { word: "passion", def: "strong interest or enthusiasm", ex: "My passion is photography and capturing moments." },
        { word: "what drives me", def: "what motivates you", ex: "What drives me is the desire to make a difference." }
    ],
    
    warmup: [
        "If you could introduce yourself without saying your name, how would you do it?",
        "What's the story behind your name? Does it have a special meaning?",
        "Where are you from originally? How has it shaped you?",
        "What's something about you that surprises people when they first meet you?",
        "If you had to describe yourself in three words, what would they be and why?"
    ],
    
    story: "When Maya was born, her parents chose a name that meant 'illusion' in Sanskrit. For years, she hated it. She felt it made her seem untrustworthy. In her twenties, she traveled to India and realized her name connected her to a profound philosophical concept. It wasn't about being fake; it was about understanding the complex, layered nature of reality. \n\nGrowing up in a small town, Maya always felt out of place. But those feelings of being different? They shaped who she is today. What drives her now is helping others embrace their uniqueness. Her background taught her that our stories—our names, our origins, our struggles—are what make us interesting. Now, her name is her greatest conversation starter.",
    
    discussion: [
        "What's the biggest misconception people have about you based on your name, appearance, or accent?",
        "How does where you're from influence who you are today?",
        "What part of your background are you most proud of?",
        "Is it better to have a unique name that's constantly misspelled, or a common name that's forgotten?",
        "How would you introduce yourself to someone who's never met anyone from your culture/country?",
        "What experiences have shaped who you are more: your family background or your personal choices?",
        "Do you think people can truly reinvent themselves, or are we always connected to our roots?",
        "What's something from your childhood that still influences you today?"
    ],
    
    debate: "Your name is the most important part of your identity.",
    
    roleplay: [
        "You're at an international camp. Someone asks about your unusual name. Explain it naturally.",
        "You're at a networking event. Introduce yourself in a way that makes people remember you.",
        "You just moved to a new country. Tell your new neighbor about your background."
    ]
};

// ================= APP STATE =================
let currentStep = 0;
const totalSteps = 10;
let timerInterval = null;
let timeLeft = 60;

// ================= RENDER FUNCTIONS =================
function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function renderScreen() {
    updateProgress();
    const main = document.getElementById('mainContent');
    main.style.animation = 'none';
    main.offsetHeight; // trigger reflow
    main.style.animation = 'fadeIn 0.5s ease';

    // Update button text
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (currentStep === 0) {
        nextBtn.textContent = 'Start Lesson';
        prevBtn.style.visibility = 'hidden';
    } else if (currentStep === totalSteps - 1) {
        nextBtn.textContent = 'Finish';
        prevBtn.style.visibility = 'visible';
    } else {
        nextBtn.textContent = 'Next';
        prevBtn.style.visibility = 'visible';
    }

    switch(currentStep) {
        case 0: renderWelcome(); break;
        case 1: renderWarmUp(); break;
        case 2: renderVocab(); break;
        case 3: renderVocabBattle(); break;
        case 4: renderStory(); break;
        case 5: renderDiscussion(); break;
        case 6: renderChallenge(); break;
        case 7: renderDebate(); break;
        case 8: renderRolePlay(); break;
        case 9: renderReflection(); break;
    }
}

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <div class="text-center">
            <span class="emoji">☕</span>
            <h1>Sip & Speak</h1>
            <h2>${lessonData.theme}</h2>
            <h3>${lessonData.title}</h3>
            <p class="mt-20" style="font-style: italic; color: var(--text-secondary);">${lessonData.subtitle}</p>
            <div class="question-box mt-20" style="border-left: none; background: rgba(166, 124, 82, 0.1);">
                <strong>Goal:</strong> ${lessonData.goal}
            </div>
            <p class="mt-20"><strong>Time:</strong> ~45-60 minutes</p>
            <p class="mt-20" style="font-size: 0.95rem;">Grab your coffee, get comfortable, and let's dive in.</p>
        </div>
    `;
}

function renderWarmUp() {
    const randomQ = lessonData.warmup[Math.floor(Math.random() * lessonData.warmup.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🔥</span>
        <h2>Warm-up</h2>
        <p>Discuss this icebreaker question with your partner:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderWarmUp()" style="width: 100%;">🎲 Shuffle Question</button>
    `;
}

function renderVocab() {
    let cardsHtml = lessonData.vocab.map(item => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.word}')" title="Listen">🔊</button>
                    <span class="front-word">${item.word}</span>
                    <p style="margin-top:10px; font-size:0.8rem; color: var(--text-secondary);">Tap to reveal</p>
                </div>
                <div class="flip-card-back">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.def}')" title="Listen">🔊</button>
                    <p class="back-def">${item.def}</p>
                    <p class="back-example">"${item.ex}"</p>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">💬</span>
        <h2>Lexical Chunks</h2>
        <p>Tap each card to flip it. Read the definition and example aloud.</p>
        <div class="mt-20">${cardsHtml}</div>
    `;
}

function renderVocabBattle() {
    let shuffled = [...lessonData.vocab].sort(() => Math.random() - 0.5);
    let cardsHtml = shuffled.map(item => `
        <div class="question-box">
            <strong style="color: var(--accent); font-size: 1.1rem;">${item.word}</strong>
            <p style="font-size:0.95rem; margin-top:8px;">Explain this to your partner without using the word itself!</p>
        </div>
    `).join('');

    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎯</span>
        <h2>Vocabulary Battle</h2>
        <p><strong>How to play:</strong></p>
        <ul style="padding-left: 20px; margin: 15px 0;">
            <li>Player A picks a card and explains the meaning</li>
            <li>Player B guesses the word/phrase</li>
            <li>No translations allowed!</li>
            <li>Switch roles after each word</li>
        </ul>
        <div class="mt-20">${cardsHtml}</div>
    `;
}

function renderStory() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">📖</span>
        <h2>Story Time</h2>
        <div class="question-box" style="border-left: none; background: rgba(255,255,255,0.9); line-height: 1.8;">
            <p>${lessonData.story}</p>
        </div>
        <h3 class="mt-20">Key expressions from the story:</h3>
        <ul style="padding-left: 20px; line-height: 2;">
            <li><strong>shaped who she is</strong> - influenced her identity</li>
            <li><strong>what drives her</strong> - what motivates her</li>
            <li><strong>conversation starter</strong> - something that begins a discussion</li>
        </ul>
        <p class="mt-20"><strong>Task:</strong> Read the story aloud, focusing on intonation and emotion.</p>
    `;
}

function renderDiscussion() {
    const randomQ = lessonData.discussion[Math.floor(Math.random() * lessonData.discussion.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🗣️</span>
        <h2>Deep Discussion</h2>
        <p>Discuss this question with your partner. Take turns and really explore the topic:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderDiscussion()" style="width: 100%;">🎲 Next Question</button>
    `;
}

function renderChallenge() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">⚡</span>
        <h2>Speed Speaking Challenge</h2>
        <p><strong>Your task:</strong> Speak for 60 seconds without stopping about who you are.</p>
        <div class="question-box mt-20" style="border-left: none;">
            <strong>You must include:</strong>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>At least 3 lexical chunks from today</li>
                <li>Your name and its story/meaning</li>
                <li>Where you're from</li>
                <li>What shapes who you are</li>
            </ul>
        </div>
        <div class="timer-display" id="timerDisplay">01:00</div>
        <div class="timer-btns">
            <button class="btn btn-primary" onclick="startTimer()">Start</button>
            <button class="btn btn-secondary" onclick="resetTimer()">Reset</button>
        </div>
    `;
}

function renderDebate() {
    const sides = [
        "AGREE: Your name is the most important part of your identity.", 
        "DISAGREE: Your actions and values define you more than your name."
    ];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🔥</span>
        <h2>Hot Takes / Debate</h2>
        <p>The computer has randomly assigned your side. You MUST defend it, even if you personally disagree!</p>
        <div class="question-box mt-20" style="text-align: center; font-size: 1.15rem; font-weight: 600; background: rgba(166, 124, 82, 0.15);">
            ${randomSide}
        </div>
        <p class="mt-20"><strong>Preparation:</strong> Take 1 minute to think of arguments<br><strong>Speaking:</strong> Defend your position for 2 minutes</p>
    `;
}

function renderRolePlay() {
    const randomScenario = lessonData.roleplay[Math.floor(Math.random() * lessonData.roleplay.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji"></span>
        <h2>Role Play</h2>
        <div class="question-box">
            <strong style="color: var(--accent);">Situation:</strong><br><br>
            ${randomScenario}
        </div>
        <p class="mt-20"><strong>Tips:</strong></p>
        <ul style="padding-left: 20px; line-height: 2;">
            <li>Keep it natural and conversational</li>
            <li>Use filler words (Well, you know, actually, I mean)</li>
            <li>Include at least 2-3 lexical chunks from today</li>
            <li>Ask follow-up questions to keep the conversation going</li>
        </ul>
        <button class="btn btn-secondary mt-20" onclick="renderRolePlay()" style="width: 100%;">🎲 Different Scenario</button>
    `;
}

function renderReflection() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🧠</span>
        <h2>Wrap-up & Reflection</h2>
        <p>Take a moment to reflect with your partner:</p>
        <div class="question-box mt-20" style="border-left: none;">
            <ul style="padding-left: 20px; line-height: 2.2;">
                <li>What was your <strong>MVP</strong> (Most Valuable Phrase) today?</li>
                <li>What sounded natural, and what felt forced?</li>
                <li>What's one new thing you learned about your partner?</li>
                <li>What do you want to remember from this lesson?</li>
            </ul>
        </div>
        <div class="text-center mt-20">
            <h3 style="color: var(--accent);">Great job! See you at the next Sip & Speak! ☕✨</h3>
        </div>
    `;
}

// ================= TIMER LOGIC =================
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').innerText = "TIME'S UP! 🎉";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timerDisplay').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ================= NAVIGATION =================
function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        renderScreen();
    } else {
        // Last step - go back to home
        window.location.href = 'index.html';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderScreen();
    }
}
// ================= TEXT TO SPEECH (Optimized Browser) =================
function speakText(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get voices (with retry if not loaded yet)
    let voices = window.speechSynthesis.getVoices();
    
    // If voices not loaded yet, wait and retry
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            setBestVoice(utterance, voices, text);
        };
    } else {
        setBestVoice(utterance, voices, text);
    }
}

function setBestVoice(utterance, voices, text) {
    // Priority order for best voices
    const voicePriority = [
        'Google UK English Female',
        'Microsoft Zira Desktop',
        'Microsoft Zira',
        'Samantha',
        'Karen',
        'Moira',
        'Tessa'
    ];
    
    // Find best voice
    let bestVoice = null;
    for (const voiceName of voicePriority) {
        bestVoice = voices.find(v => v.name.includes(voiceName));
        if (bestVoice) break;
    }
    
    // If no preferred voice, find any English voice
    if (!bestVoice) {
        bestVoice = voices.find(v => v.lang === 'en-GB' && v.name.includes('Female')) ||
                   voices.find(v => v.lang === 'en-US' && v.name.includes('Female')) ||
                   voices.find(v => v.lang.startsWith('en'));
    }
    
    // Apply voice
    if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
    } else {
        utterance.lang = 'en-GB';
    }
    
    // Settings for natural sound
    utterance.rate = 0.9;   // Slightly slower
    utterance.pitch = 1.05; // Slightly higher
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
}

// Pre-load voices on page load
window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};
// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    renderScreen();
});