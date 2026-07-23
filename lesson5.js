// ================= LESSON 5: MUSIC THAT SHAPES US =================
const lessonData = {
    title: "Music That Shapes Us",
    subtitle: "Sounds, rhythms, and memories",
    duration: "60-75 min",
    level: "B2-C1",
    theme: "Music & Identity",
    emoji: "🎵",
    
    vocab: [
        { word: "soundtrack", def: "music that accompanies a particular event or period", ex: "This song was the soundtrack to my teenage years." },
        { word: "nostalgic", def: "feeling happy and slightly sad when remembering the past", ex: "That melody makes me feel nostalgic about summer holidays." },
        { word: "upbeat", def: "cheerful and optimistic", ex: "I love listening to upbeat music in the morning." },
        { word: "melancholy", def: "a feeling of gentle sadness, often in a beautiful way", ex: "There's a certain melancholy in this composition." },
        { word: "rhythm", def: "a strong, regular, repeated pattern of sound", ex: "The rhythm of this song makes you want to dance." },
        { word: "lyrics", def: "the words of a song", ex: "I can't understand the lyrics - they're too quiet." },
        { word: "genre", def: "a particular style or category of music", ex: "What's your favorite music genre?" },
        { word: "playlist", def: "a list of songs prepared for playing in sequence", ex: "I created a playlist for my workout sessions." }
    ],
    
    vocabCategories: {
        "Music Genres": [
            { word: "pop", def: "popular music with catchy melodies", ex: "She loves listening to pop music." },
            { word: "rock", def: "music with strong rhythm and electric guitars", ex: "Classic rock never gets old." },
            { word: "jazz", def: "music with improvisation and complex harmonies", ex: "Jazz clubs have a special atmosphere." },
            { word: "classical", def: "traditional orchestral music", ex: "Classical music helps me concentrate." }
        ],
        "Emotions & Music": [
            { word: "energetic", def: "showing great energy and enthusiasm", ex: "This track is so energetic!" },
            { word: "soothing", def: "calming and relaxing", ex: "Her voice is incredibly soothing." },
            { word: "powerful", def: "having great emotional impact", ex: "That was a powerful performance." }
        ],
        "Music Actions": [
            { word: "to jam", def: "to play music informally", ex: "Let's jam together this weekend!" },
            { word: "to vibe", def: "to feel a connection with music", ex: "I'm really vibing with this song." },
            { word: "to binge-listen", def: "to listen to many songs continuously", ex: "I binge-listened to the entire album." }
        ]
    }
};

let currentStep = 0;
let currentCategory = 0;
let totalSteps = 8;
let selectedGroupSize = 'pair'; // 'solo', 'pair', 'group'

// ================= PROGRESS SAVE/LOAD =================
function saveProgress() {
    const progress = {
        lesson: 'lesson5',
        step: currentStep,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('sipSpeakProgress', JSON.stringify(progress));
    showProgressSaved();
}

function loadProgress() {
    const saved = localStorage.getItem('sipSpeakProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        if (progress.lesson === 'lesson5') {
            currentStep = progress.step;
            return true;
        }
    }
    return false;
}

function showProgressSaved() {
    const indicator = document.getElementById('progressSaved');
    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 2000);
}

function clearProgress() {
    if (confirm('Clear saved progress?')) {
        localStorage.removeItem('sipSpeakProgress');
        currentStep = 0;
        renderScreen();
    }
}

// ================= NAVIGATION =================
function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        renderScreen();
        saveProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Last step - go back to home
        localStorage.removeItem('sipSpeakProgress');
        window.location.href = 'index.html';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderScreen();
        saveProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ================= RENDER FUNCTIONS =================
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
        case 4: renderListeningActivity(); break;
        case 5: renderGroupDiscussion(); break;
        case 6: renderVocabBattle(); break;
        case 7: renderReflection(); break;
    }
}

function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎵</span>
        <h2 style="color: #B20B13;">Welcome to Lesson 5!</h2>
        <h1 style="font-family: 'Caveat', cursive; font-size: 3rem; color: #6E4644; margin: 20px 0;">Music That Shapes Us</h1>
        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 30px;">
            Explore how music influences our identity, memories, and emotions
        </p>
        
        <div class="question-box mt-20" style="background: linear-gradient(135deg, #FDECDC 0%, #FFE5D0 100%); border-left: 4px solid #B20B13;">
            <h3 style="color: #6E4644; margin-top: 0;"> Lesson Details</h3>
            <p><strong>Duration:</strong> 60-75 minutes</p>
            <p><strong>Level:</strong> B2-C1</p>
            <p><strong>Theme:</strong> Music & Identity</p>
            <p><strong>Format:</strong> Flexible (solo, pairs, or groups)</p>
        </div>
        
        <div class="mt-20" style="background: rgba(42,69,98,0.1); padding: 20px; border-radius: 15px;">
            <p style="margin: 0; color: #2A4562;"><strong> Tip:</strong> Your progress is automatically saved as you go!</p>
        </div>
    `;
}

function renderWarmUp() {
    const questions = [
        "What song instantly makes you happy?",
        "What music did you love 5 years ago vs now?",
        "Can you describe your perfect playlist?",
        "What song reminds you of a specific person?",
        "If your life had a soundtrack, what genre would it be?"
    ];
    
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji"></span>
        <h2 style="color: #B20B13;">Warm-up: Music & Memories</h2>
        <p>Discuss with your partner(s) or reflect individually:</p>
        
        <div class="question-box mt-20" style="background: linear-gradient(135deg, #B20B13 0%, #B41A1A 100%); color: white; border: none;">
            <p style="font-size: 1.2rem; margin: 0; font-weight: 500;">${randomQ}</p>
        </div>
        
        <div class="group-selector mt-20">
            <button class="group-btn ${selectedGroupSize === 'solo' ? 'active' : ''}" onclick="setGroupSize('solo')"> Solo</button>
            <button class="group-btn ${selectedGroupSize === 'pair' ? 'active' : ''}" onclick="setGroupSize('pair')">👥 Pair</button>
            <button class="group-btn ${selectedGroupSize === 'group' ? 'active' : ''}" onclick="setGroupSize('group')">👥👥 Group (3+)</button>
        </div>
        
        <button class="btn btn-secondary mt-20" onclick="renderWarmUp()" style="width: 100%;">🎲 Shuffle Question</button>
    `;
}

function setGroupSize(size) {
    selectedGroupSize = size;
    renderWarmUp();
}

function renderVocabCategories() {
    const categories = Object.keys(lessonData.vocabCategories);
    let html = `
        <span class="emoji">📚</span>
        <h2 style="color: #B20B13;">Vocabulary Overview</h2>
        <p>We'll explore music vocabulary across <strong>${categories.length} categories</strong></p>
        <div class="mt-20">
    `;
    
    categories.forEach((cat, idx) => {
        const count = lessonData.vocabCategories[cat].length;
        html += `
            <div class="question-box" style="padding: 20px; margin-bottom: 15px; background: linear-gradient(135deg, #FDECDC 0%, #FFE5D0 100%); border-left: 4px solid #6E4644;">
                <strong style="color: #B20B13; font-size: 1.1rem;">${cat}</strong>
                <span style="float: right; color: #2A4562; font-weight: 600;">${count} words</span>
            </div>
        `;
    });
    
    html += `</div>`;
    
    document.getElementById('mainContent').innerHTML = html;
}

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
        <span class="emoji">🎸</span>
        <h2 style="color: #B20B13;">${currentCat}</h2>
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

function renderListeningActivity() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎶</span>
        <h2 style="color: #B20B13;">Active Listening</h2>
        <p>Choose a song that's meaningful to you and analyze it:</p>
        
        <div class="music-card">
            <h3 style="margin-top: 0; font-family: 'Caveat', cursive; font-size: 2rem;">Your Song Analysis</h3>
            <div style="text-align: left; margin-top: 25px;">
                <p><strong>🎵 Title:</strong> _______________________</p>
                <p><strong>👤 Artist:</strong> _______________________</p>
                <p><strong>🎼 Genre:</strong> _______________________</p>
                <p><strong>💭 Mood/Emotion:</strong> _______________________</p>
                <p><strong>📖 What story does it tell?</strong><br>_______________________</p>
                <p><strong>🎯 Why is it meaningful to you?</strong><br>_______________________</p>
            </div>
            <div class="music-controls">
                <button class="music-btn">⏮</button>
                <button class="music-btn">▶</button>
                <button class="music-btn"></button>
            </div>
        </div>
        
        <div class="group-task-card">
            <h4 style="color: #6E4644; margin-top: 0;">Flexible Task:</h4>
            <ul style="margin: 0; padding-left: 20px; line-height: 2;">
                <li><strong>Solo:</strong> Write your analysis and share if comfortable</li>
                <li><strong>Pair:</strong> Exchange analyses and discuss similarities</li>
                <li><strong>Group:</strong> Create a collaborative playlist with explanations</li>
            </ul>
        </div>
    `;
}

function renderGroupDiscussion() {
    const tasks = {
        solo: [
            "Reflect: How has your music taste changed over time?",
            "Create a playlist that represents different chapters of your life",
            "Write about a song that changed your perspective"
        ],
        pair: [
            "Compare your music preferences - what's similar/different?",
            "Teach your partner about your favorite genre",
            "Create a shared playlist together"
        ],
        group: [
            "Debate: Is music today better or worse than before?",
            "Discuss: Can music bring people from different cultures together?",
            "Create a group playlist representing everyone's taste"
        ]
    };
    
    const currentTasks = tasks[selectedGroupSize];
    const randomTask = currentTasks[Math.floor(Math.random() * currentTasks.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">💬</span>
        <h2 style="color: #B20B13;">Group Discussion</h2>
        <p>Format: <strong>${selectedGroupSize === 'solo' ? 'Individual Reflection' : selectedGroupSize === 'pair' ? 'Pair Work' : 'Group Discussion'}</strong></p>
        
        <div class="question-box mt-20" style="background: linear-gradient(135deg, #2A4562 0%, #1a3045 100%); color: white; border: none;">
            <p style="font-size: 1.1rem; margin: 0;">${randomTask}</p>
        </div>
        
        <div class="mt-20">
            <h4 style="color: #6E4644;">Other options for ${selectedGroupSize === 'solo' ? 'you' : selectedGroupSize === 'pair' ? 'pairs' : 'groups'}:</h4>
            <ul style="line-height: 2.2;">
                ${currentTasks.filter(t => t !== randomTask).map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
        
        <button class="btn btn-secondary mt-20" onclick="renderGroupDiscussion()" style="width: 100%;"> Shuffle Task</button>
    `;
}

function renderVocabBattle() {
    const shuffled = [...lessonData.vocab].sort(() => Math.random() - 0.5);
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎯</span>
        <h2 style="color: #B20B13;">Vocabulary Challenge</h2>
        <p>Test your knowledge! Try to recall definitions without looking.</p>
        
        <div class="mt-20">
            ${shuffled.map((item, idx) => `
                <div class="flip-card" style="height: auto; min-height: 150px;">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" style="padding: 20px;">
                            <span style="font-family: 'Comfortaa', cursive; font-size: 1.3rem; color: #B20B13; font-weight: 600;">${item.word}</span>
                            <p style="margin-top: 15px; font-size: 0.85rem; color: var(--text-secondary);">Tap to check yourself</p>
                        </div>
                        <div class="flip-card-back" style="padding: 20px;">
                            <p style="font-weight: 600; color: #6E4644; margin-bottom: 10px;">${item.def}</p>
                            <p style="font-style: italic; color: var(--text-secondary); font-size: 0.9rem;">"${item.ex}"</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderReflection() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎵</span>
        <h2 style="color: #B20B13;">Wrap-up & Reflection</h2>
        <p>Reflect on today's lesson:</p>
        
        <div class="question-box mt-20" style="border-left: none; background: linear-gradient(135deg, #FDECDC 0%, #FFE5D0 100%);">
            <ul style="padding-left: 20px; line-height: 2.2;">
                <li>What new vocabulary will you use this week?</li>
                <li>Which song will you listen to differently now?</li>
                <li>How would you describe your musical identity?</li>
                <li>What's one music-related goal you have?</li>
                <li>Rate today's lesson using music vocabulary!</li>
            </ul>
        </div>
        
        <button class="btn btn-primary mt-20" onclick="generateCheatSheet()" style="width: 100%;">📥 Download PDF Cheat Sheet</button>
        
        <div class="text-center mt-20">
            <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Keep the music playing! 🎶✨</h3>
            <p style="margin-top: 10px;">Let music be the soundtrack to your English journey!</p>
        </div>
        
        <div class="mt-20" style="text-align: center;">
            <button class="btn btn-secondary" onclick="clearProgress()" style="font-size: 0.85rem;">Clear Progress</button>
        </div>
    `;
}

// ================= TEXT TO SPEECH =================
function speakText(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voices = window.speechSynthesis.getVoices();
    const bestVoice = voices.find(v => 
        v.name.includes('Google UK English Female') ||
        v.name.includes('Microsoft Zira') ||
        v.name.includes('Samantha')
    );
    
    if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
    } else {
        utterance.lang = 'en-GB';
    }
    
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
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
        background: #B20B13; color: white; padding: 15px 30px;
        border-radius: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000; font-family: 'Quicksand', sans-serif; font-size: 0.95rem;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// ================= PDF CHEAT SHEET =================
function generateCheatSheet() {
    let allWords = [];
    if (lessonData.vocab) {
        allWords = lessonData.vocab;
    } else if (lessonData.vocabCategories) {
        allWords = Object.values(lessonData.vocabCategories).flat();
    }

    const cheatSheetHTML = `
        <div style="font-family: 'Quicksand', sans-serif; padding: 50px 40px; background: #FFF0F3; min-height: 100vh;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 3rem; margin-bottom: 10px;"></div>
                <h1 style="font-family: 'Fredoka One', cursive; font-size: 3rem; color: #B20B13; margin: 0; letter-spacing: 2px;">Sip & Speak</h1>
                <h2 style="font-family: 'Quicksand', sans-serif; font-size: 1.3rem; color: #F2A6B9; margin: 10px 0 0 0; font-weight: 600;">${lessonData.title}</h2>
                <div style="width: 60px; height: 3px; background: #B20B13; margin: 15px auto 0 auto;"></div>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #F2A6B9;">
                        <th style="padding: 12px 8px; text-align: center; width: 8%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">know</th>
                        <th style="padding: 12px 8px; text-align: left; width: 32%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">word/phrase</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">definition</th>
                        <th style="padding: 12px 8px; text-align: left; width: 30%; font-size: 0.85rem; color: #B20B13; font-weight: 700;">example</th>
                    </tr>
                </thead>
                <tbody>
                    ${allWords.map((item, index) => `
                        <tr style="border-bottom: 1px solid #FCE4EC;">
                            <td style="padding: 14px 8px; text-align: center;">
                                <div style="width: 18px; height: 18px; border: 1.5px solid #F2A6B9; display: inline-block;"></div>
                            </td>
                            <td style="padding: 14px 8px; font-weight: 700; color: #B20B13; font-size: 0.95rem;">${item.word}</td>
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

// ================= INIT =================
window.speechSynthesis.getVoices();
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

document.addEventListener('DOMContentLoaded', () => {
    const loaded = loadProgress();
    if (loaded && confirm('Continue from where you left off?')) {
        renderScreen();
    } else {
        currentStep = 0;
        renderScreen();
    }
});