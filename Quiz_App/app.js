document.addEventListener('DOMContentLoaded', () => {
    // Ensure quizQuestions is loaded from questions.js
    if (typeof quizQuestions === 'undefined' || quizQuestions.length === 0) {
        document.getElementById('question-text').innerText = "Error: Questions could not be loaded.";
        return;
    }

    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const endScreen = document.getElementById('end-screen');
    
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackText = document.getElementById('feedback-text');
    
    const scoreDisplay = document.getElementById('score');
    const totalQuestionsDisplay = document.getElementById('total-questions');
    const progressBar = document.getElementById('progress-bar');
    const finalScoreText = document.getElementById('final-score-text');
    const finalMessage = document.getElementById('final-message');

    // State
    let currentQuestionIndex = 0;
    let score = 0;
    
    // Total questions to show (we can limit it so the quiz isn't too long)
    const MAX_QUESTIONS = Math.min(quizQuestions.length, 25);
    
    // Shuffle array function to randomize options
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle questions once at the start
    let shuffledQuestions = shuffleArray([...quizQuestions]).slice(0, MAX_QUESTIONS);

    totalQuestionsDisplay.innerText = MAX_QUESTIONS;

    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < MAX_QUESTIONS) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        } else {
            showEndScreen();
        }
    });
    restartBtn.addEventListener('click', () => {
        shuffledQuestions = shuffleArray([...quizQuestions]).slice(0, MAX_QUESTIONS);
        startQuiz();
    });

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.innerText = score;
        
        startScreen.classList.remove('active');
        endScreen.classList.remove('active');
        questionScreen.classList.add('active');
        
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(q) {
        // Reset UI
        feedbackContainer.classList.add('hidden');
        feedbackContainer.className = 'feedback-container hidden'; // reset color classes
        optionsContainer.innerHTML = '';
        
        // Update Progress
        const progressPercent = ((currentQuestionIndex) / MAX_QUESTIONS) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Set Question Text
        questionText.innerText = `Q${currentQuestionIndex + 1}. ${q.question}`;
        
        // Create Options
        let currentOptions = shuffleArray([...q.options]);
        
        currentOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerText = opt;
            btn.addEventListener('click', () => selectOption(btn, opt, q));
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedBtn, selectedText, q) {
        // Disable all buttons
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.disabled = true);
        
        // Check answer
        // Note: The logic in Python tried to identify the exact string. We do a includes or startsWith check to be safe
        // because sometimes the option has (A) inside it and the correct answer doesn't.
        const cleanSelected = selectedText.replace(/^\([A-E]\)\s*/, '').trim().toLowerCase();
        const cleanCorrect = q.correctAnswer.replace(/^\([A-E]\)\s*/, '').trim().toLowerCase();
        
        // Very robust checking
        const isCorrect = cleanSelected === cleanCorrect || cleanSelected.includes(cleanCorrect) || cleanCorrect.includes(cleanSelected);
        
        if (isCorrect) {
            score++;
            scoreDisplay.innerText = score;
            selectedBtn.classList.add('correct');
            feedbackTitle.innerText = '✅ Correct!';
            feedbackContainer.classList.add('correct-feedback');
        } else {
            selectedBtn.classList.add('incorrect');
            // Highlight the correct one
            allButtons.forEach(btn => {
                const cleanBtn = btn.innerText.replace(/^\([A-E]\)\s*/, '').trim().toLowerCase();
                if (cleanBtn === cleanCorrect || cleanBtn.includes(cleanCorrect) || cleanCorrect.includes(cleanBtn)) {
                    btn.classList.add('correct');
                }
            });
            feedbackTitle.innerText = '❌ Incorrect';
            feedbackContainer.classList.add('incorrect-feedback');
        }
        
        // Show explanation
        feedbackText.innerText = q.explanation || `The correct answer was: ${q.correctAnswer}`;
        feedbackContainer.classList.remove('hidden');
        
        // Update progress fully if it's the last question
        if (currentQuestionIndex === MAX_QUESTIONS - 1) {
            progressBar.style.width = `100%`;
            nextBtn.innerText = 'See Results';
        } else {
            nextBtn.innerText = 'Next Question';
        }
    }

    function showEndScreen() {
        questionScreen.classList.remove('active');
        endScreen.classList.add('active');
        
        finalScoreText.innerText = `${score} / ${MAX_QUESTIONS}`;
        
        const percentage = (score / MAX_QUESTIONS) * 100;
        if (percentage === 100) {
            finalMessage.innerText = "Perfect Score! You are absolutely ready for the NPTEL Exam!";
        } else if (percentage >= 80) {
            finalMessage.innerText = "Excellent! You have a solid grasp of Marketing Analytics.";
        } else if (percentage >= 50) {
            finalMessage.innerText = "Good effort. Review the Cheatsheet modules to catch up on the details.";
        } else {
            finalMessage.innerText = "Keep studying! Use the Exam Prep modules and try again.";
        }
    }
});
