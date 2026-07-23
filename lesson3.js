// ================= DATA: LESSON 3 - TRAVEL BROADENS THE MIND =================
const lessonData = {
    title: "Travel Broadens the Mind",
    subtitle: "Cultures, Experiences & Adventures That Shape Us",
    theme: "Mediterranean Journey 🌍",
    goal: "To discuss travel experiences, cultural differences, and the transformative power of exploration",
    
    // CATEGORIZED VOCABULARY
    vocabCategories: {
        " Types of Travel": [
            { word: "off the beaten path", def: "away from tourist areas, less popular places", ex: "I prefer exploring off the beaten path destinations." },
            { word: "staycation", def: "vacation spent at home or nearby", ex: "We're having a staycation this year to save money." },
            { word: "solo travel", def: "traveling alone", ex: "Solo travel really pushed me out of my comfort zone." },
            { word: "backpacking", def: "budget travel with a backpack, often long-term", ex: "She spent a year backpacking through Southeast Asia." },
            { word: "luxury travel", def: "high-end, expensive travel experiences", ex: "They splurged on luxury travel for their anniversary." },
            { word: "sustainable tourism", def: "travel that minimizes environmental impact", ex: "We try to practice sustainable tourism wherever we go." }
        ],
        
        "🗺️ Travel Experiences": [
            { word: "culture shock", def: "disorientation from experiencing unfamiliar culture", ex: "I experienced serious culture shock in my first week." },
            { word: "get off the grid", def: "disconnect from technology/internet", ex: "I need to get off the grid and recharge." },
            { word: "immerse yourself", def: "deeply involve yourself in something", ex: "The best way to learn is to immerse yourself in the culture." },
            { word: "step out of your comfort zone", def: "do something unfamiliar/challenging", ex: "Travel forces you to step out of your comfort zone." },
            { word: "broaden your horizons", def: "expand your knowledge/experience", ex: "Studying abroad really broadened my horizons." },
            { word: "see the world through different eyes", def: "gain new perspectives", ex: "Traveling made me see the world through different eyes." }
        ],
        
        "🏨 Travel Situations": [
            { word: "red-eye flight", def: "overnight flight that disrupts sleep", ex: "I hate red-eye flights, they wreck my schedule." },
            { word: "layover/stopover", def: "waiting time between connecting flights", ex: "We had a 6-hour layover in Dubai." },
            { word: "travel light", def: "pack minimally", ex: "I've learned to travel light - it's so much easier." },
            { word: "go with the flow", def: "be flexible, adapt to situations", ex: "When traveling, it's best to just go with the flow." },
            { word: "hit the road", def: "start a journey", ex: "We're hitting the road at dawn tomorrow." },
            { word: "live out of a suitcase", def: "travel frequently, never staying long", ex: "She's been living out of a suitcase for months." }
        ],
        
        "💭 Describing Places": [
            { word: "breathtaking", def: "extremely beautiful or impressive", ex: "The views from the mountain were breathtaking." },
            { word: "tourist trap", def: "place that overcharges tourists", ex: "That restaurant is such a tourist trap." },
            { word: "hidden gem", def: "excellent but little-known place", ex: "This café is a hidden gem - locals only!" },
            { word: "picturesque", def: "visually charming, like a picture", ex: "The village was absolutely picturesque." },
            { word: "authentic", def: "genuine, not commercialized", ex: "We found an authentic local market." },
            { word: "overrated/underrated", def: "better/worse than people say", ex: "That attraction was totally overrated." }
        ],
        
        "🌍 Cultural Understanding": [
            { word: "cultural immersion", def: "deep engagement with local culture", ex: "Homestays offer the best cultural immersion." },
            { word: "language barrier", def: "difficulty communicating due to language", ex: "The language barrier was challenging but manageable." },
            { word: "cultural sensitivity", def: "awareness and respect for cultural differences", ex: "Cultural sensitivity is crucial when traveling." },
            { word: "local customs", def: "traditional practices of a place", ex: "Always research local customs before visiting." },
            { word: "homesickness", def: "missing home while away", ex: "I got homesick after two weeks on the road." },
            { word: "wanderlust", def: "strong desire to travel", ex: "She has a serious case of wanderlust." }
        ],
        
        "💰 Travel Practicalities": [
            { word: "budget-friendly", def: "inexpensive, affordable", ex: "This neighborhood is more budget-friendly." },
            { word: "rip-off", def: "grossly overpriced (informal)", ex: "$20 for coffee? That's a total rip-off!" },
            { word: "travel hack", def: "clever tip to make travel easier/cheaper", ex: "Here's a travel hack: pack cubes are life-changing." },
            { word: "book in advance", def: "reserve ahead of time", ex: "Always book in advance during peak season." },
            { word: "last-minute deal", def: "discounted booking made shortly before", ex: "We got an amazing last-minute deal on flights." }
        ]
    },
    
    warmup: [
        "What's the most memorable place you've ever visited and why?",
        "Do you prefer beach vacations, city breaks, or nature adventures?",
        "What's something you've learned about yourself through traveling?",
        "Would you rather visit famous landmarks or explore like a local?",
        "What's your biggest travel pet peeve?"
    ],
    
    story: "Three years ago, I decided to backpack through Southeast Asia solo. I was terrified - I'd never traveled alone, let alone to a continent where I didn't speak the language. But I was stuck in a rut and needed to shake things up.\n\nThe first week was rough. Culture shock hit hard. Simple tasks like ordering food or catching a bus felt overwhelming. I missed home, my bed, familiar faces. But then something shifted. I started meeting people in hostels - fellow travelers, locals who invited me for tea, other solo travelers who became fast friends.\n\nI learned to go with the flow when buses broke down, flights got canceled, and plans fell through. I discovered hidden gems that weren't in guidebooks. I stepped out of my comfort zone trying street food, bargaining at markets, navigating chaotic cities.\n\nBy the end of three months, I'd traveled light in every sense - lighter possessions, lighter worries, lighter perspective. That trip broadened my horizons more than any university course. It taught me resilience, adaptability, and that most people are genuinely kind. Now I have serious wanderlust permanently. Once you've seen the world through different eyes, you can never go back.",
    
    discussion: [
        "Do you think travel truly broadens the mind, or is that just a cliché?",
        "What's more valuable: visiting many countries briefly or deeply exploring one place?",
        "How has travel changed your perspective on your own culture?",
        "Is sustainable tourism realistic, or is all travel inherently damaging?",
        "What's the difference between a tourist and a traveler?",
        "Can you truly understand a culture without speaking the language?",
        "How do you balance planning versus spontaneity when traveling?",
        "What's your take on 'voluntourism' - is it helpful or harmful?",
        "How has social media changed the way we experience and share travel?",
        "Do you think solo travel is empowering or unnecessarily risky?"
    ],
    
    debate: "Mass tourism does more harm than good for local communities and cultures.",
    
    roleplay: [
        "You're trying to convince a skeptical friend to take their first solo trip. Address their concerns.",
        "You're staying in a local's home through a homestay program. They ask about your culture. Explain something meaningful.",
        "You're at a hostel common room. Someone asks for travel recommendations for your home country. What do you suggest?"
    ],
    
    travelQuiz: [
        { question: "An overnight flight that disrupts your sleep schedule", answer: "red-eye flight" },
        { question: "A place that's excellent but not well-known", answer: "hidden gem" },
        { question: "Strong desire to travel and explore the world", answer: "wanderlust" },
        { question: "Disorientation from experiencing an unfamiliar culture", answer: "culture shock" }
    ]
};

// ================= APP STATE =================
let currentStep = 0;
const totalSteps = 13;
let timerInterval = null;
let timeLeft = 60;
let currentCategory = 0;
let currentQuizIndex = 0;

const allVocab = Object.values(lessonData.vocabCategories).flat();

// ================= RENDER FUNCTIONS =================
function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function renderScreen() {
    updateProgress();
    const main = document.getElementById('mainContent');
    main.style.animation = 'none';
    main.offsetHeight;
    main.style.animation = 'fadeIn 0.5s ease';

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
        case 2: renderVocabCategories(); break;
        case 3: renderVocabByCategory(); break;
        case 4: renderVocabBattle(); break;
        case 5: renderTravelQuiz(); break;
        case 6: renderStory(); break;
        case 7: renderDiscussion(); break;
        case 8: renderChallenge(); break;
        case 9: renderDebate(); break;
        case 10: renderRolePlay(); break;
        case 11: renderPackingChallenge(); break;
        case 12: renderReflection(); break;
    }
}

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <div class="text-center">
            <img src="images/chemodan.png" alt="Travel suitcase" class="welcome-image">
            <h1>Sip & Speak</h1>
            <h2>${lessonData.theme}</h2>
            <h3>${lessonData.title}</h3>
            <p class="mt-20" style="font-style: italic; color: var(--text-secondary);">${lessonData.subtitle}</p>
            
            <div class="quote-box">
                <p>"Youth is a journey"</p>
                <span>— Che Guevara</span>
            </div>
            
            <div class="question-box mt-20" style="border-left: none; background: rgba(152, 74, 57, 0.15);">
                <strong>Goal:</strong> ${lessonData.goal}
            </div>
            <p class="mt-20"><strong>Time:</strong> ~60-75 minutes</p>
            <p class="mt-20" style="font-size: 0.95rem;">Pack your bags and let's explore! 🧳</p>
        </div>
    `;
}

function renderWarmUp() {
    const randomQ = lessonData.warmup[Math.floor(Math.random() * lessonData.warmup.length)];
    document.getElementById('mainContent').innerHTML = `
        <div class="warmup-header">
            <img src="images/samolet.png" alt="Travel" class="warmup-image">
        </div>
        <h2>Warm-up</h2>
        <p>Discuss this icebreaker question with your partner:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderWarmUp()" style="width: 100%;">🎲 Shuffle Question</button>
    `;
}

function renderVocabCategories() {
    const categories = Object.keys(lessonData.vocabCategories);
    let html = `
        <span class="emoji">📚</span>
        <h2>Vocabulary Overview</h2>
        <p>We'll explore travel vocabulary across <strong>${categories.length} categories</strong>:</p>
        <div class="mt-20">
    `;
    
    categories.forEach((cat, idx) => {
        const count = lessonData.vocabCategories[cat].length;
        html += `
            <div class="question-box" style="padding: 15px 20px; margin-bottom: 12px;">
                <strong style="color: var(--primary);">${idx + 1}. ${cat}</strong>
                <span style="float: right; color: var(--text-secondary);">${count} expressions</span>
            </div>
        `;
    });
    
    html += `
        </div>
        <p class="mt-20" style="text-align: center; font-style: italic;">Click Next to dive into each category!</p>
    `;
    
    document.getElementById('mainContent').innerHTML = html;
}

function renderVocab() {
    let cardsHtml = lessonData.vocab.map(item => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
<button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.word}')" title="Listen" style="right: 15px;">🔊</button>                    <p style="margin-top:10px; font-size:0.8rem; color: var(--text-secondary);">Tap to reveal</p>
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
// ================= VOCABULARY BY CATEGORY =================
function renderVocabByCategory() {
    const categories = Object.keys(lessonData.vocabCategories);
    const currentCat = categories[currentCategory % categories.length];
    const vocab = lessonData.vocabCategories[currentCat];
    
    let cardsHtml = vocab.map(item => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.word}')" title="Listen" style="position: absolute; right: 15px; top: 15px;">🔊</button>
                    <button class="audio-btn" onclick="event.stopPropagation(); addToDictionary('${item.word}', '${item.def}', '${item.ex}')" title="Add to Dictionary" style="position: absolute; right: 60px; top: 15px;">⭐</button>
                    <span class="front-word">${item.word}</span>
                    <p style="margin-top:10px; font-size:0.8rem; color: var(--text-secondary);">Tap to reveal</p>
                </div>
                <div class="flip-card-back">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.def}')" title="Listen" style="position: absolute; right: 15px; top: 15px;"></button>
                    <button class="audio-btn" onclick="event.stopPropagation(); addToDictionary('${item.word}', '${item.def}', '${item.ex}')" title="Add to Dictionary" style="position: absolute; right: 60px; top: 15px;">⭐</button>
                    <p class="back-def">${item.def}</p>
                    <p class="back-example">"${item.ex}"</p>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎭</span>
        <h2>${currentCat}</h2>
        <p>Tap each card to flip. Read aloud and try to create your own sentence!</p>
        <div class="mt-20">${cardsHtml}</div>
        <div class="text-center mt-20">
            <p style="font-size: 0.9rem; color: var(--text-secondary);">Category ${currentCategory + 1} of ${categories.length}</p>
            <button class="btn btn-secondary mt-20" onclick="nextCategory()" style="width: 100%;">Next Category →</button>
        </div>
    `;
}

function nextCategory() {
    currentCategory++;
    if (currentCategory < Object.keys(lessonData.vocabCategories).length) {
        renderVocabByCategory();
    } else {
        currentStep++;
        renderScreen();
    }
}

function renderVocabBattle() {
    let shuffled = [...allVocab].sort(() => Math.random() - 0.5).slice(0, 15);
    let cardsHtml = shuffled.map(item => `
        <div class="question-box">
            <strong style="color: var(--primary); font-size: 1.1rem;">${item.word}</strong>
            <p style="font-size:0.95rem; margin-top:8px;">Explain without using the word!</p>
        </div>
    `).join('');

    document.getElementById('mainContent').innerHTML = `
        <span class="emoji"></span>
        <h2>Vocabulary Battle</h2>
        <p><strong>How to play:</strong></p>
        <ul style="padding-left: 20px; margin: 15px 0;">
            <li>Player A picks a card and explains the meaning</li>
            <li>Player B guesses the word/phrase</li>
            <li>No translations allowed!</li>
            <li>3 points for correct guess, 1 point if partner needs hints</li>
        </ul>
        <div class="mt-20">${cardsHtml}</div>
    `;
}

function renderTravelQuiz() {
    const quiz = lessonData.travelQuiz[currentQuizIndex];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">✈️</span>
        <h2>Travel Quiz</h2>
        <p>Guess the travel term based on the description:</p>
        <div class="question-box mt-20" style="background: rgba(152, 74, 57, 0.15); border-left: none; text-align: center; padding: 30px;">
            <p style="font-size: 1.2rem; font-weight: 500;">${quiz.question}</p>
        </div>
        <div class="mt-20 text-center">
            <button class="btn btn-secondary" onclick="revealAnswer()">Reveal Answer</button>
            <div id="answerBox" style="display: none; margin-top: 15px; padding: 15px; background: rgba(118, 132, 91, 0.2); border-radius: 12px;">
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--primary); margin: 0;">${quiz.answer}</p>
            </div>
        </div>
        <button class="btn btn-primary mt-20" onclick="nextQuizQuestion()" style="width: 100%;">${currentQuizIndex < lessonData.travelQuiz.length - 1 ? 'Next Question' : 'Complete Quiz'}</button>
    `;
}

function revealAnswer() {
    document.getElementById('answerBox').style.display = 'block';
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < lessonData.travelQuiz.length) {
        renderTravelQuiz();
    } else {
        currentStep++;
        renderScreen();
    }
}

function renderStory() {
    document.getElementById('mainContent').innerHTML = `
        <div class="story-header">
            <img src="images/passport.png" alt="Passport and boarding passes" class="story-image">
        </div>
        <h2>Story Time</h2>
        <div class="question-box" style="border-left: none; background: rgba(255, 255, 255, 0.9); line-height: 1.9;">
            <p>${lessonData.story}</p>
        </div>
        <h3 class="mt-20">Key expressions used:</h3>
        <ul style="padding-left: 20px; line-height: 2.2;">
            <li><strong>stuck in a rut</strong> - in a boring, unchanging situation</li>
            <li><strong>culture shock</strong> - disorientation from new culture</li>
            <li><strong>go with the flow</strong> - be flexible</li>
            <li><strong>hidden gems</strong> - excellent but unknown places</li>
            <li><strong>step out of comfort zone</strong> - do something challenging</li>
            <li><strong>traveled light</strong> - packed minimally</li>
            <li><strong>broadened my horizons</strong> - expanded my perspective</li>
            <li><strong>wanderlust</strong> - strong desire to travel</li>
            <li><strong>seen the world through different eyes</strong> - gained new perspective</li>
        </ul>
        <p class="mt-20"><strong>Task:</strong> Read aloud. Notice how travel vocabulary flows naturally in storytelling.</p>
    `;
}

function renderDiscussion() {
    const randomQ = lessonData.discussion[Math.floor(Math.random() * lessonData.discussion.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji"></span>
        <h2>Deep Discussion</h2>
        <p>Discuss this question. Use at least 3 vocabulary expressions from today:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderDiscussion()" style="width: 100%;">🎲 Next Question</button>
    `;
}

function renderChallenge() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">⚡</span>
        <h2>Speed Speaking Challenge</h2>
        <p><strong>Your task:</strong> Speak for 90 seconds about your dream trip.</p>
        <div class="question-box mt-20" style="border-left: none;">
            <strong>You must include:</strong>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>Where you'd go and why</li>
                <li>At least 5 vocabulary expressions from today</li>
                <li>What type of travel experience you'd seek</li>
                <li>How you think it would change you</li>
            </ul>
        </div>
        <div class="timer-display" id="timerDisplay">01:30</div>
        <div class="timer-btns">
            <button class="btn btn-primary" onclick="startTimer(90)">Start</button>
            <button class="btn btn-secondary" onclick="resetTimer(90)">Reset</button>
        </div>
    `;
}

function renderDebate() {
    const sides = [
        "AGREE: Mass tourism does more harm than good for local communities.", 
        "DISAGREE: Tourism brings economic benefits that outweigh the drawbacks."
    ];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🔥</span>
        <h2>Hot Takes / Debate</h2>
        <p>The computer has randomly assigned your side. Defend it passionately!</p>
        <div class="question-box mt-20" style="text-align: center; font-size: 1.15rem; font-weight: 600; background: rgba(152, 74, 57, 0.2);">
            ${randomSide}
        </div>
        <p class="mt-20"><strong>Preparation:</strong> 2 minutes to think of arguments<br><strong>Speaking:</strong> Defend your position for 2-3 minutes<br><strong>Use:</strong> At least 4 vocabulary expressions</p>
    `;
}

function renderRolePlay() {
    const randomScenario = lessonData.roleplay[Math.floor(Math.random() * lessonData.roleplay.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <div class="roleplay-header">
            <img src="images/metka.png" alt="Location" class="challenge-icon">
        </div>
        <h2>Role Play</h2>
        <div class="question-box">
            <strong style="color: var(--primary);">Situation:</strong><br><br>
            ${randomScenario}
        </div>
        <p class="mt-20"><strong>Tips:</strong></p>
        <ul style="padding-left: 20px; line-height: 2;">
            <li>Be enthusiastic and authentic</li>
            <li>Use descriptive travel vocabulary</li>
            <li>Ask follow-up questions</li>
            <li>Naturally incorporate 3-4 expressions</li>
        </ul>
        <button class="btn btn-secondary mt-20" onclick="renderRolePlay()" style="width: 100%;">🎲 Different Scenario</button>
    `;
}

function renderPackingChallenge() {
    document.getElementById('mainContent').innerHTML = `
        <div class="challenge-header">
            <img src="images/metka.png" alt="Location" class="challenge-icon">
        </div>
        <h2>Packing Challenge</h2>
        <p><strong>Scenario:</strong> You're going on a 2-week trip. You can only bring what fits in a carry-on backpack.</p>
        <div class="question-box mt-20">
            <strong style="color: var(--primary);">Your mission:</strong>
            <ol style="padding-left: 20px; margin: 15px 0; line-height: 2;">
                <li>List your 10 essential items</li>
                <li>Explain WHY each item is essential</li>
                <li>Discuss what you'd sacrifice and why</li>
                <li>Use vocabulary: <em>travel light, pack minimally, essentials</em></li>
            </ol>
        </div>
        <p class="mt-20"><strong>Time:</strong> 3 minutes to prepare, 2 minutes to present</p>
        <p style="font-style: italic; color: var(--text-secondary);">Remember: You can't check a bag!</p>
    `;
}

function renderReflection() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🧠</span>
        <h2>Wrap-up & Reflection</h2>
        <p>Reflect with your partner:</p>
        <div class="question-box mt-20" style="border-left: none;">
            <ul style="padding-left: 20px; line-height: 2.2;">
                <li>What were your <strong>top 3 favorite expressions</strong> from today?</li>
                <li>Which vocabulary category resonated most with you?</li>
                <li>What's ONE small change you'll make this week?</li>
                <li>How do you define 'wellness' now vs. before this lesson?</li>
                <li>Rate today's lesson using wellness vocabulary!</li>
            </ul>
        </div>
        
        <!-- ВОТ СЮДА ВСТАВЬ КНОПКУ: -->
        <button class="btn btn-primary mt-20" onclick="generateCheatSheet()" style="width: 100%;">
            📥 Download PDF Cheat Sheet
        </button>
        
        <div class="text-center mt-20">
    <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Safe travels! ✈️🌍</h3>
    <p style="margin-top: 10px;">Explore the world and collect amazing stories!</p>
</div>
    `;  // ← Закрывающая кавычка и точка с запятой ОБЯЗАТЕЛЬНЫ!
}

// ================= TIMER LOGIC =================
function startTimer(seconds = 60) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    updateTimerDisplay(seconds);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(seconds);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').innerText = "TIME'S UP! 🎉";
        }
    }, 1000);
}

function resetTimer(seconds = 60) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    updateTimerDisplay(seconds);
}

function updateTimerDisplay(totalSeconds) {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timerDisplay').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ================= NAVIGATION =================
function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        renderScreen();
        window.scrollTo({ top: 0, behavior: 'smooth' });  // ← ДОБАВИТЬ ЭТУ СТРОКУ
    } else {
        // Last step - go back to home
        window.location.href = 'index.html';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderScreen();
        window.scrollTo({ top: 0, behavior: 'smooth' });  // ← ДОБАВИТЬ ЭТУ СТРОКУ
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

// ================= PDF CHEAT SHEET =================
function generateCheatSheet() {
    let allWords = [];
    if (lessonData.vocab) {
        allWords = lessonData.vocab;
    } else if (lessonData.vocabCategories) {
        allWords = Object.values(lessonData.vocabCategories).flat();
    }

    const cheatSheetHTML = `
        <div style="font-family: 'Quicksand', sans-serif; padding: 50px 40px; background: #F0F8FF; min-height: 100vh;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">✈️</div>
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 3rem; color: #5B9BD5; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.3rem; color: #A9D0F5; margin: 10px 0 0 0; font-weight: 600;">${lessonData.title}</h2>
                <div style="width: 60px; height: 3px; background: #5B9BD5; margin: 15px auto 0 auto;"></div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #A9D0F5;">
                        <th style="padding: 12px 8px; text-align: center; width: 8%; font-size: 0.85rem; color: #5B9BD5; font-weight: 700;">know</th>
                        <th style="padding: 12px 8px; text-align: left; width: 32%; font-size: 0.85rem; color: #5B9BD5; font-weight: 700;">word/phrase</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #5B9BD5; font-weight: 700;">definition</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #5B9BD5; font-weight: 700;">example</th>
                    </tr>
                </thead>
                <tbody>
                    ${allWords.map((item, index) => `
                        <tr style="border-bottom: 1px solid #E8F4FD;">
                            <td style="padding: 14px 8px; text-align: center;">
                                <div style="width: 18px; height: 18px; border: 1.5px solid #A9D0F5; display: inline-block;"></div>
                            </td>
                            <td style="padding: 14px 8px; font-weight: 700; color: #5B9BD5; font-size: 0.95rem;">${item.word}</td>
                            <td style="padding: 14px 8px; color: #666; font-size: 0.9rem;">${item.def}</td>
                            <td style="padding: 14px 8px; color: #888; font-style: italic; font-size: 0.85rem;">"${item.ex}"</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    const opt = {
        margin: [10, 10, 10, 10],
        filename: `Sip_Speak_${lessonData.title.replace(/\s+/g, '_')}_CheatSheet.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(cheatSheetHTML).save();
}
// ================= PERSONAL DICTIONARY =================
function addToDictionary(word, definition, example) {
    let dictionary = JSON.parse(localStorage.getItem('sipSpeakDictionary') || '[]');
    
    const exists = dictionary.find(item => item.word === word);
    
    if (exists) {
        alert(`"${word}" is already in your dictionary!`);
        return;
    }
    
    dictionary.push({
        word: word,
        definition: definition,
        example: example,
        addedAt: new Date().toISOString()
    });
    
    localStorage.setItem('sipSpeakDictionary', JSON.stringify(dictionary));
    
    showNotification(`"${word}" added to dictionary! ⭐`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: #76845B; color: white; padding: 15px 30px;
        border-radius: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000; font-family: 'Poppins', sans-serif; font-size: 0.95rem;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
}