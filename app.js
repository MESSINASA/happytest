class MentalHealthTest {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.allQuestions = this.flattenQuestions();
    }

    flattenQuestions() {
        const allQuestions = [];
        for (const category in questions) {
            questions[category].forEach(question => {
                allQuestions.push(question);
            });
        }
        return allQuestions;
    }

    startTest() {
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.showQuestion();
        this.showScreen('test-screen');
    }

    showQuestion() {
        const question = this.allQuestions[this.currentQuestionIndex];
        document.getElementById('question-text').textContent = question.text;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.text;
            optionElement.onclick = () => this.selectOption(question.id, option.value);
            optionsContainer.appendChild(optionElement);
        });

        this.updateProgress();
    }

    selectOption(questionId, value) {
        this.answers[questionId] = value;
        
        if (this.currentQuestionIndex < this.allQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        const progress = (this.currentQuestionIndex / this.allQuestions.length) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    }

    showResults() {
        const results = calculateResults(this.answers);
        displayResults(results);
        this.showScreen('result-screen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

const test = new MentalHealthTest();

// 登录处理
function handleLogin() {
    LoadingManager.show();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const user = User.login(username, password);
        if (user) {
            localStorage.setItem('currentUser', username);
            test.startTest();
        } else {
            ToastManager.showError('用户名或密码错误！');
        }
    } catch (error) {
        ToastManager.showError(error.message);
    } finally {
        LoadingManager.hide();
    }
}

// 注册处理
function handleRegister() {
    LoadingManager.show();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        if (!username || !password) {
            throw new Error('用户名和密码不能为空！');
        }
        
        if (password.length < 6) {
            throw new Error('密码长度不能少于6位！');
        }
        
        if (User.register(username, password)) {
            ToastManager.showError('注册成功！请登录');
            // 清空输入框
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        } else {
            ToastManager.showError('用户名已存在！');
        }
    } catch (error) {
        ToastManager.showError(error.message);
    } finally {
        LoadingManager.hide();
    }
}

function startTest() {
    test.startTest();
}

function retakeTest() {
    if (confirm('确定要重新开始测试吗？')) {
        test.startTest();
    }
}

function showRecommendations() {
    // 实现查看建议功能
    alert('基于您的测试结果，我们建议：\n1. 保持规律的作息\n2. 适当运动\n3. 与亲友保持联系\n如果症状持续，建议咨询专业心理医生');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 检查是否已登录
    const username = localStorage.getItem('currentUser');
    if (username) {
        test.startTest();
    }
    
    // 初始化主题
    ThemeManager.init();
}); 