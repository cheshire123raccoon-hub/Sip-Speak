// ================= DATA: LESSON 4 - MIND & BODY =================
const lessonData = {
    title: "Mind & Body",
    subtitle: "Wellness, Health & Self-Care in Modern Life",
    theme: "Holistic Wellness 🧘",
    goal: "To discuss mental and physical health, stress management, and holistic wellbeing strategies",
    
    // VIDEO RESOURCES - 3 videos
videos: [
    {
        title: "How stress affects your body",
        src: "videos/video3.mp4",
        duration: "4:30",
        description: "TED-Ed explores the physiological impact of stress on your body and brain",
        level: "B2-C1"
    },
    {
        title: "Do you really need to take 10,000 steps a day?",
        src: "videos/video4.mp4",
        duration: "5:15",
        description: "Shannon Odell examines the science behind the famous step count recommendation",
        level: "B2"
    },
    {
        title: "How to make your stress work for you",
        src: "videos/video5.mp4",
        duration: "4:45",
        description: "Shannon Odell reveals how to reframe stress as a positive force",
        level: "B2-C1"
    }
],
    
    // CATEGORIZED VOCABULARY
    vocabCategories: {
        "🧠 Mental Health & Stress": [
            { word: "burnout", def: "physical/emotional exhaustion from prolonged stress", ex: "She took a leave of absence due to burnout." },
            { word: "anxiety", def: "persistent worry or fear about everyday situations", ex: "Social anxiety makes networking events challenging." },
            { word: "mental resilience", def: "ability to bounce back from difficulties", ex: "Meditation builds mental resilience." },
            { word: "overwhelmed", def: "feeling unable to cope with demands", ex: "I'm completely overwhelmed with work lately." },
            { word: "mindfulness", def: "being present and aware in the moment", ex: "Mindfulness practice reduces stress significantly." },
            { word: "cortisol", def: "stress hormone released by the body", ex: "High cortisol levels can disrupt sleep." }
        ],
        
        "💪 Physical Health & Fitness": [
            { word: "sedentary lifestyle", def: "inactive way of life with little exercise", ex: "A sedentary lifestyle increases health risks." },
            { word: "cardiovascular health", def: "health of heart and blood vessels", ex: "Running improves cardiovascular health." },
            { word: "metabolism", def: "chemical processes that convert food to energy", ex: "Exercise boosts your metabolism." },
            { word: "immune system", def: "body's defense against illness", ex: "Sleep strengthens your immune system." },
            { word: "endorphins", def: "chemicals that create feelings of happiness", ex: "Exercise releases endorphins naturally." },
            { word: "physical activity", def: "any bodily movement that uses energy", ex: "Even light physical activity helps." }
        ],
        
        "😴 Sleep & Recovery": [
            { word: "sleep deprivation", def: "not getting enough sleep", ex: "Sleep deprivation affects cognitive function." },
            { word: "circadian rhythm", def: "body's internal 24-hour clock", ex: "Jet lag disrupts your circadian rhythm." },
            { word: "quality sleep", def: "restorative, deep sleep", ex: "Quality sleep is more important than quantity." },
            { word: "power nap", def: "short nap (10-20 min) for energy", ex: "A power nap can boost productivity." },
            { word: "sleep hygiene", def: "habits that promote good sleep", ex: "Good sleep hygiene includes no screens before bed." },
            { word: "insomnia", def: "chronic difficulty falling/staying asleep", ex: "Stress can trigger insomnia." }
        ],
        
        "🧘 Self-Care & Wellness": [
            { word: "self-care routine", def: "regular practices for wellbeing", ex: "My self-care routine includes yoga and journaling." },
            { word: "work-life balance", def: "equilibrium between job and personal life", ex: "Achieving work-life balance is crucial." },
            { word: "digital detox", def: "period without electronic devices", ex: "I do a digital detox every weekend." },
            { word: "me-time", def: "time alone for relaxation", ex: "I need some me-time to recharge." },
            { word: "holistic health", def: "whole-person approach to wellness", ex: "Holistic health addresses mind, body, and spirit." },
            { word: "preventive care", def: "actions to prevent illness", ex: "Preventive care is better than treatment." }
        ],
        
        " Habits & Lifestyle": [
            { word: "healthy habits", def: "positive routines for wellbeing", ex: "Small healthy habits compound over time." },
            { word: "lifestyle changes", def: "modifications to daily routines", ex: "Lifestyle changes can reverse some conditions." },
            { word: "consistency", def: "regular, steady practice", ex: "Consistency is key to seeing results." },
            { word: "motivation", def: "drive to take action", ex: "Motivation fluctuates, but discipline sustains." },
            { word: "willpower", def: "control over impulses and actions", ex: "Willpower is like a muscle - it can be strengthened." },
            { word: "sustainable", def: "maintainable long-term", ex: "Extreme diets aren't sustainable." }
        ],
        
        "💭 Mind-Body Connection": [
            { word: "psychosomatic", def: "physical symptoms caused by mental factors", ex: "Stress can cause psychosomatic headaches." },
            { word: "gut-brain connection", def: "link between digestive and nervous systems", ex: "The gut-brain connection affects mood." },
            { word: "placebo effect", def: "improvement from belief in treatment", ex: "The placebo effect demonstrates mind-body power." },
            { word: "stress response", def: "body's reaction to threat (fight-or-flight)", ex: "The stress response evolved for survival." },
            { word: "relaxation response", def: "body's opposite reaction to stress", ex: "Meditation triggers the relaxation response." },
            { word: "biofeedback", def: "using body signals to control functions", ex: "Biofeedback helps manage chronic pain." }
        ]
    },
    
    warmup: [
        "How would you rate your current work-life balance on a scale of 1-10?",
        "What's your go-to self-care activity when you're stressed?",
        "Do you think you get enough quality sleep? Why or why not?",
        "What's one healthy habit you want to develop but struggle with?",
        "How do you feel about exercise - energizing or exhausting?"
    ],
    
    story: "Six months ago, I hit a wall. I was working 60-hour weeks, surviving on coffee and willpower, and sleeping maybe 5 hours a night. I thought I was being productive, but really, I was just burning out.\n\nThe signs were there - constant fatigue, irritability, getting sick every other week. My cortisol levels were through the roof. But I ignored them until I couldn't anymore. I had a complete meltdown during a presentation. Right there in front of 30 colleagues, I froze, started shaking, and couldn't continue.\n\nThat was my wake-up call. I realized my sedentary lifestyle, sleep deprivation, and chronic stress were destroying my health. So I made lifestyle changes. Small ones at first - a 10-minute walk during lunch, turning off screens an hour before bed, taking actual breaks instead of eating at my desk.\n\nI started practicing mindfulness - just 5 minutes of meditation each morning. I learned about the mind-body connection, how stress triggers the fight-or-flight response, how quality sleep strengthens the immune system. I discovered that 10,000 steps a day isn't magic - consistency matters more than perfection.\n\nNow, six months later, I still have stress, but I manage it differently. I prioritize work-life balance, I have a self-care routine, and I actually enjoy my me-time. My mental resilience has improved dramatically. The irony? I'm more productive now working 40 hours than I ever was working 60.",
    
    discussion: [
        "Do you think modern society glorifies being busy and stressed? Why?",
        "What's more important for health: diet, exercise, or sleep?",
        "Is the 10,000 steps recommendation helpful or misleading?",
        "How do you balance ambition and self-care?",
        "Do you think mental health is taken as seriously as physical health?",
        "What's your opinion on wellness trends and 'biohacking'?",
        "Can you be healthy without exercising? Can you be healthy without good sleep?",
        "How has technology affected our sleep and stress levels?",
        "Is it possible to have perfect work-life balance, or is that a myth?",
        "What role does social media play in our mental health?"
    ],
    
    debate: "Companies should be legally required to limit employee working hours to protect mental and physical health.",
    
    roleplay: [
        "Your friend is experiencing burnout but refuses to slow down. Convince them to prioritize self-care.",
        "You're at a wellness retreat. Someone asks about your self-care routine. Describe it naturally.",
        "You disagree with a colleague who says 'stress is all in your head.' Discuss respectfully."
    ],
    
    wellnessQuiz: [
        { question: "The stress hormone released by your body", answer: "cortisol" },
        { word: "Chemicals that create feelings of happiness during exercise", answer: "endorphins" },
        { question: "Body's internal 24-hour clock", answer: "circadian rhythm" },
        { question: "Physical/emotional exhaustion from prolonged stress", answer: "burnout" }
    ]
};

// ================= APP STATE =================
let currentStep = 0;
const totalSteps = 13;
let timerInterval = null;
let timeLeft = 60;
let currentCategory = 0;
let currentQuizIndex = 0;
let selectedVideo = 0;

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
        case 5: renderWellnessQuiz(); break;
        case 6: renderVideoListening(); break;
        case 7: renderStory(); break;
        case 8: renderDiscussion(); break;
        case 9: renderChallenge(); break;
        case 10: renderDebate(); break;
        case 11: renderRolePlay(); break;
        case 12: renderReflection(); break;
    }
}

function renderWelcome() {
    document.getElementById('mainContent').innerHTML = `
        <div class="text-center">
            <span class="emoji">🧘</span>
            <h1>Sip & Speak</h1>
            <h2>${lessonData.theme}</h2>
            <h3>${lessonData.title}</h3>
            <p class="mt-20" style="font-style: italic; color: var(--text-secondary);">${lessonData.subtitle}</p>
            <div class="question-box mt-20" style="border-left: none; background: rgba(118, 132, 91, 0.15);">
                <strong>Goal:</strong> ${lessonData.goal}
            </div>
            <p class="mt-20"><strong>Time:</strong> ~60-75 minutes</p>
            <p class="mt-20" style="font-size: 0.95rem;">Take a deep breath and let's begin! 🌿</p>
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

function renderVocabCategories() {
    const categories = Object.keys(lessonData.vocabCategories);
    let html = `
        <span class="emoji">📚</span>
        <h2>Vocabulary Overview</h2>
        <p>We'll explore wellness vocabulary across <strong>${categories.length} categories</strong>:</p>
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
// ================= VOCABULARY BY CATEGORY =================
function renderVocabByCategory() {
    const categories = Object.keys(lessonData.vocabCategories);
    const currentCat = categories[currentCategory % categories.length];
    const vocab = lessonData.vocabCategories[currentCat];
    
    let cardsHtml = vocab.map(item => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <button class="audio-btn" onclick="event.stopPropagation(); speakText('${item.word}')" title="Listen">🔊</button>
                    <span class="front-word">${item.word}</span>
                    <p style="margin-top:10px; font-size:0.85rem; color: var(--text-secondary);">Tap to reveal</p>
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
        <span class="emoji">💪</span>
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

function renderWellnessQuiz() {
    const quiz = lessonData.wellnessQuiz[currentQuizIndex];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🧠</span>
        <h2>Wellness Quiz</h2>
        <p>Guess the wellness term based on the description:</p>
        <div class="question-box mt-20" style="background: rgba(118, 132, 91, 0.15); border-left: none; text-align: center; padding: 30px;">
            <p style="font-size: 1.2rem; font-weight: 500;">${quiz.question || quiz.word}</p>
        </div>
        <div class="mt-20 text-center">
            <button class="btn btn-secondary" onclick="revealAnswer()">Reveal Answer</button>
            <div id="answerBox" style="display: none; margin-top: 15px; padding: 15px; background: rgba(118, 132, 91, 0.2); border-radius: 12px;">
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--primary); margin: 0;">${quiz.answer}</p>
            </div>
        </div>
        <button class="btn btn-primary mt-20" onclick="nextQuizQuestion()" style="width: 100%;">${currentQuizIndex < lessonData.wellnessQuiz.length - 1 ? 'Next Question' : 'Complete Quiz'}</button>
    `;
}

function revealAnswer() {
    document.getElementById('answerBox').style.display = 'block';
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < lessonData.wellnessQuiz.length) {
        renderWellnessQuiz();
    } else {
        currentStep++;
        renderScreen();
    }
}

function renderVideoListening() {
    const video = lessonData.videos[selectedVideo];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎥</span>
        <h2>Video Listening</h2>
        
        <div class="question-box mt-20" style="background: rgba(0,0,0,0.05); border-left: none;">
            <h3 style="color: var(--primary); margin-bottom: 10px;">${video.title}</h3>
            <p style="font-size: 0.9rem; margin-bottom: 8px;">️ Duration: ${video.duration}</p>
            <p style="font-size: 0.9rem; margin-bottom: 15px;"> Level: ${video.level}</p>
            <p style="font-style: italic; color: var(--text-secondary);">${video.description}</p>
            
            <!-- HTML5 Video Player -->
            <video controls width="100%" style="margin-top: 20px; border-radius: 12px; background: #000;">
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        
        <div class="mt-20">
            <h3 style="color: var(--primary);"> Before Watching:</h3>
            <ul style="padding-left: 20px; line-height: 2;">
                <li>Think about: <em>How does stress affect YOUR body?</em></li>
                <li>Note down what you expect to learn</li>
                <li>Review vocabulary from today's lesson</li>
            </ul>
        </div>
        
        <div class="mt-20">
            <h3 style="color: var(--primary);"> While Watching:</h3>
            <ul style="padding-left: 20px; line-height: 2;">
                <li>Listen for main ideas</li>
                <li>Note down 3-5 new expressions</li>
                <li>Pay attention to scientific terms</li>
            </ul>
        </div>
        
        <div class="question-box mt-20" style="background: rgba(118, 132, 91, 0.15); border-left: none;">
            <h3 style="color: var(--primary); margin-bottom: 15px;">✍️ After Watching - Discussion:</h3>
            <ol style="padding-left: 20px; line-height: 2;">
                <li>What was the main message of the video?</li>
                <li>Did anything surprise you?</li>
                <li>What new vocabulary did you catch?</li>
                <li>How does this relate to your own experience?</li>
                <li>Will you change anything based on this information?</li>
            </ol>
        </div>
        
        <div class="text-center mt-20">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;">Video ${selectedVideo + 1} of ${lessonData.videos.length}</p>
            <button class="btn btn-secondary" onclick="previousVideo()" style="margin-right: 10px;">← Previous Video</button>
            <button class="btn btn-primary" onclick="nextVideoOrContinue()">${selectedVideo < lessonData.videos.length - 1 ? 'Next Video →' : 'Continue Lesson'}</button>
        </div>
    `;
}

function nextVideoOrContinue() {
    if (selectedVideo < lessonData.videos.length - 1) {
        selectedVideo++;
        renderVideoListening();
    } else {
        currentStep++;
        renderScreen();
    }
}

function previousVideo() {
    if (selectedVideo > 0) {
        selectedVideo--;
        renderVideoListening();
    }
}

function renderStory() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">📖</span>
        <h2>Story Time</h2>
        <div class="question-box" style="border-left: none; background: rgba(255, 255, 255, 0.9); line-height: 1.9;">
            <p>${lessonData.story}</p>
        </div>
        <h3 class="mt-20">Key expressions used:</h3>
        <ul style="padding-left: 20px; line-height: 2.2;">
            <li><strong>burnout</strong> - physical/emotional exhaustion</li>
            <li><strong>sedentary lifestyle</strong> - inactive way of life</li>
            <li><strong>sleep deprivation</strong> - not getting enough sleep</li>
            <li><strong>cortisol levels</strong> - stress hormone levels</li>
            <li><strong>lifestyle changes</strong> - modifications to routines</li>
            <li><strong>mindfulness</strong> - being present and aware</li>
            <li><strong>mind-body connection</strong> - link between mental and physical</li>
            <li><strong>work-life balance</strong> - equilibrium between work and life</li>
            <li><strong>self-care routine</strong> - regular wellness practices</li>
            <li><strong>mental resilience</strong> - ability to bounce back</li>
        </ul>
        <p class="mt-20"><strong>Task:</strong> Read aloud. Notice how wellness vocabulary flows naturally in storytelling.</p>
    `;
}

function renderDiscussion() {
    const randomQ = lessonData.discussion[Math.floor(Math.random() * lessonData.discussion.length)];
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🗣️</span>
        <h2>Deep Discussion</h2>
        <p>Discuss this question. Use at least 3 vocabulary expressions from today:</p>
        <div class="question-box mt-20">${randomQ}</div>
        <button class="btn btn-secondary mt-20" onclick="renderDiscussion()" style="width: 100%;">🎲 Next Question</button>
    `;
}

function renderChallenge() {
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">⚡</span>
        <h2>Wellness Challenge</h2>
        <p><strong>Your task:</strong> Speak for 90 seconds about your ideal wellness routine.</p>
        <div class="question-box mt-20" style="border-left: none;">
            <strong>You must include:</strong>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>Your current self-care practices (if any)</li>
                <li>At least 5 vocabulary expressions from today</li>
                <li>What you'd like to improve</li>
                <li>Realistic goals for the next month</li>
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
        "AGREE: Companies should limit working hours to protect health.", 
        "DISAGREE: Adults should have freedom to work as much as they want."
    ];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🔥</span>
        <h2>Hot Takes / Debate</h2>
        <p>The computer has randomly assigned your side. Defend it passionately!</p>
        <div class="question-box mt-20" style="text-align: center; font-size: 1.15rem; font-weight: 600; background: rgba(118, 132, 91, 0.2);">
            ${randomSide}
        </div>
        <p class="mt-20"><strong>Preparation:</strong> 2 minutes to think of arguments<br><strong>Speaking:</strong> Defend your position for 2-3 minutes<br><strong>Use:</strong> At least 4 vocabulary expressions</p>
    `;
}

function renderRolePlay() {
    const randomScenario = lessonData.roleplay[Math.floor(Math.random() * lessonData.roleplay.length)];
    
    document.getElementById('mainContent').innerHTML = `
        <span class="emoji">🎭</span>
        <h2>Role Play</h2>
        <div class="question-box">
            <strong style="color: var(--primary);">Situation:</strong><br><br>
            ${randomScenario}
        </div>
        <p class="mt-20"><strong>Tips:</strong></p>
        <ul style="padding-left: 20px; line-height: 2;">
            <li>Be empathetic and supportive</li>
            <li>Use wellness vocabulary naturally</li>
            <li>Ask clarifying questions</li>
            <li>Incorporate 3-4 expressions</li>
        </ul>
        <button class="btn btn-secondary mt-20" onclick="renderRolePlay()" style="width: 100%;"> Different Scenario</button>
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
        <div class="text-center mt-20">
            <h3 style="color: var(--primary); font-family: 'Comfortaa', cursive;">Namaste! 🧘✨</h3>
            <p style="margin-top: 10px;">Take care of your mind and body!</p>
        </div>
    `;
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
    } else {
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