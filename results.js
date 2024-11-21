const resultCategories = {
    anxiety: {
        name: '焦虑水平',
        levels: [
            { 
                max: 4, 
                level: '正常范围', 
                description: '你的焦虑水平在正常范围内。这是健康的状态，建议：\n' +
                    '• 保持规律的作息和健康的生活方式\n' +
                    '• 适度运动和放松活动\n' +
                    '• 保持社交活动和兴趣爱好'
            },
            { 
                max: 9, 
                level: '轻度焦虑', 
                description: '你可能存在轻度焦虑。建议：\n' +
                    '• 学习并练习呼吸放松技巧\n' +
                    '• 保持规律运动，每周至少150分钟中等强度运动\n' +
                    '• 与信任的人分享你的感受\n' +
                    '• 适当减少咖啡因摄入\n' +
                    '• 保证充足的睡眠'
            },
            { 
                max: 14, 
                level: '中度焦虑', 
                description: '你可能存在中度焦虑，建议：\n' +
                    '• 考虑寻求心理咨询师的帮助\n' +
                    '• 学习认知行为疗法(CBT)的基本技巧\n' +
                    '• 规律作息，避免过度工作\n' +
                    '• 练习正念冥想\n' +
                    '• 如症状持续，建议咨询精神科医生'
            },
            { 
                max: Infinity, 
                level: '重度焦虑', 
                description: '你可能存在重度焦虑，强烈建议：\n' +
                    '• 及时就医，寻求精神科医生的帮助\n' +
                    '• 遵医嘱进行治疗\n' +
                    '• 保持与家人和朋友的紧密联系\n' +
                    '• 适当调整工作和生活节奏\n' +
                    '• 避免做重要决定，直到状态改善'
            }
        ]
    },
    depression: {
        name: '抑郁水平',
        levels: [
            { 
                max: 4, 
                level: '正常范围', 
                description: '你的情绪状态在正常范围内。建议：\n' +
                    '• 保持积极的生活态度\n' +
                    '• 培养兴趣爱好\n' +
                    '• 保持良好的社交关系'
            },
            { 
                max: 9, 
                level: '轻度抑郁', 
                description: '你可能存在轻度抑郁情绪。建议：\n' +
                    '• 增加户外活动和阳光接触\n' +
                    '• 保持规律运动习惯\n' +
                    '• 与亲友多交流沟通\n' +
                    '• 保持规律的作息时间\n' +
                    '• 尝试写日记或进行创造性活动'
            },
            { 
                max: 14, 
                level: '中度抑郁', 
                description: '你可能存在中度抑郁，建议：\n' +
                    '• 寻求专业心理咨询师的帮助\n' +
                    '• 告知家人或信任的朋友你的状况\n' +
                    '• 避免独处太久\n' +
                    '• 坚持基本的日常活动\n' +
                    '• 如症状持续，建议就医评估'
            },
            { 
                max: Infinity, 
                level: '重度抑郁', 
                description: '你可能存在重度抑郁，强烈建议：\n' +
                    '• 立即就医，接受专业评估和治疗\n' +
                    '• 告知家人并寻求支持\n' +
                    '• 确保不独处\n' +
                    '• 遵医嘱服用药物（如有）\n' +
                    '• 保持与医生的定期随访\n' +
                    '如有自伤或自杀想法，请立即拨打心理危机干预热线：400-161-9995'
            }
        ]
    },
    stress: {
        name: '压力水平',
        levels: [
            { 
                max: 4, 
                level: '正常范围', 
                description: '你的压力水平在正常范围内。建议：\n' +
                    '• 保持当前的生活方式\n' +
                    '• 继续培养健康的压力管理习惯\n' +
                    '• 定期进行自我评估'
            },
            { 
                max: 9, 
                level: '轻度压力', 
                description: '你可能承受着轻度压力。建议：\n' +
                    '• 学习时间管理技巧\n' +
                    '• 培养放松习惯，如瑜伽或冥想\n' +
                    '• 保持规律运动\n' +
                    '• 确保充足睡眠\n' +
                    '• 适当调整工作节奏'
            },
            { 
                max: 14, 
                level: '中度压力', 
                description: '你可能承受着中度压力。建议：\n' +
                    '• 识别并记录压力源\n' +
                    '• 学习压力管理技巧\n' +
                    '• 适当寻求心理咨询\n' +
                    '• 调整工作和生活平衡\n' +
                    '• 培养健康的应对机制'
            },
            { 
                max: Infinity, 
                level: '重度压力', 
                description: '你可能承受着重度压力。建议：\n' +
                    '• 及时寻求专业帮助\n' +
                    '• 与主管沟通工作压力\n' +
                    '• 适当休假调整\n' +
                    '• 避免过度加班\n' +
                    '• 寻求家人和朋友的支持\n' +
                    '如果压力已经影响到身心健康，请及时就医'
            }
        ]
    }
};

function calculateResults(answers) {
    const results = {};
    
    for (const category in questions) {
        const categoryQuestions = questions[category];
        let score = 0;
        
        categoryQuestions.forEach(question => {
            if (answers[question.id] !== undefined) {
                score += answers[question.id];
            }
        });
        
        results[category] = {
            score,
            ...getLevel(category, score)
        };
    }
    
    return results;
}

function getLevel(category, score) {
    const levels = resultCategories[category].levels;
    for (const level of levels) {
        if (score <= level.max) {
            return level;
        }
    }
    return levels[levels.length - 1];
}

class TestHistory {
    static saveResult(results) {
        const history = this.getHistory();
        const resultEntry = {
            date: new Date().toISOString(),
            results: results
        };
        history.push(resultEntry);
        localStorage.setItem('testHistory', JSON.stringify(history));
    }

    static getHistory() {
        return JSON.parse(localStorage.getItem('testHistory') || '[]');
    }

    static clearHistory() {
        localStorage.removeItem('testHistory');
    }

    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    static displayHistory() {
        const history = this.getHistory();
        const container = document.getElementById('history-container');
        container.innerHTML = '';

        if (history.length === 0) {
            container.innerHTML = '<p class="no-history">暂无历史记录</p>';
            return;
        }

        history.reverse().forEach((entry, index) => {
            const resultCard = document.createElement('div');
            resultCard.className = 'history-card';
            
            let resultSummary = '<div class="history-summary">';
            for (const category in entry.results) {
                const result = entry.results[category];
                resultSummary += `
                    <div class="category-summary">
                        <span class="category-name">${resultCategories[category].name}:</span>
                        <span class="category-level ${result.level.replace(/[^a-zA-Z]/g, '').toLowerCase()}">${result.level}</span>
                    </div>
                `;
            }
            resultSummary += '</div>';

            resultCard.innerHTML = `
                <div class="history-header">
                    <span class="history-date">${this.formatDate(entry.date)}</span>
                    <button onclick="showHistoryDetail(${index})" class="detail-btn">详情</button>
                </div>
                ${resultSummary}
            `;
            
            container.appendChild(resultCard);
        });
    }
}

function saveResult() {
    TestHistory.saveResult(currentResults);
    alert('结果已保存！');
}

function showHistory() {
    TestHistory.displayHistory();
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById('history-screen').classList.add('active');
}

function clearHistory() {
    if (confirm('确定要清除所有历史记录吗？')) {
        TestHistory.clearHistory();
        TestHistory.displayHistory();
    }
}

function showHistoryDetail(index) {
    const history = TestHistory.getHistory();
    const entry = history[history.length - 1 - index];
    
    // 显示详细结果
    const resultContainer = document.getElementById('result-container');
    displayResults(entry.results);
    
    // 切换到结果界面
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById('result-screen').classList.add('active');
}

let currentResults = null;

function displayResults(results) {
    currentResults = results;
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';

    for (const category in results) {
        const result = results[category];
        const categoryElement = document.createElement('div');
        categoryElement.className = 'result-category';
        
        categoryElement.innerHTML = `
            <h3>${resultCategories[category].name}</h3>
            <p class="result-level ${result.level.replace(/[^a-zA-Z]/g, '').toLowerCase()}">
                水平：${result.level}
            </p>
            <div class="score-bar">
                <div class="score-fill" style="width: ${(result.score / 15) * 100}%"></div>
            </div>
            <p class="result-description">${result.description}</p>
        `;
        
        resultContainer.appendChild(categoryElement);
    }
}

class TestAnalytics {
    static async exportResult(result) {
        const notes = document.getElementById('result-notes').value;
        const exportData = {
            date: new Date().toISOString(),
            results: result,
            notes: notes
        };

        // 创建CSV数据
        const csvContent = this.generateCSV(exportData);
        
        // 创建下载链接
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `mental_health_test_${new Date().toISOString().slice(0,10)}.csv`;
        link.click();
    }

    static generateCSV(data) {
        let csv = '日期,类别,水平,分数,笔记\n';
        for (const category in data.results) {
            csv += `${data.date},${resultCategories[category].name},${data.results[category].level},${data.results[category].score},"${data.notes}"\n`;
        }
        return csv;
    }

    static async showTrendChart() {
        const history = TestHistory.getHistory();
        const chartData = this.prepareTrendData(history);
        
        // 使用Chart.js绘制趋势图
        const ctx = document.getElementById('chart-container').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.dates,
                datasets: [
                    {
                        label: '焦虑水平',
                        data: chartData.anxiety,
                        borderColor: 'rgb(255, 99, 132)',
                        tension: 0.1
                    },
                    {
                        label: '抑郁水平',
                        data: chartData.depression,
                        borderColor: 'rgb(54, 162, 235)',
                        tension: 0.1
                    },
                    {
                        label: '压力水平',
                        data: chartData.stress,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 15
                    }
                }
            }
        });
    }

    static prepareTrendData(history) {
        const dates = [];
        const anxiety = [];
        const depression = [];
        const stress = [];

        history.forEach(entry => {
            dates.push(TestHistory.formatDate(entry.date));
            anxiety.push(entry.results.anxiety.score);
            depression.push(entry.results.depression.score);
            stress.push(entry.results.stress.score);
        });

        return { dates, anxiety, depression, stress };
    }

    static showComparison() {
        const history = TestHistory.getHistory();
        const select1 = document.getElementById('compare-date-1');
        const select2 = document.getElementById('compare-date-2');

        // 填充日期选择器
        select1.innerHTML = '';
        select2.innerHTML = '';
        history.forEach((entry, index) => {
            const date = TestHistory.formatDate(entry.date);
            const option = `<option value="${index}">${date}</option>`;
            select1.innerHTML += option;
            select2.innerHTML += option;
        });

        // 显示对比结果
        this.updateComparison();
    }

    static updateComparison() {
        const history = TestHistory.getHistory();
        const index1 = document.getElementById('compare-date-1').value;
        const index2 = document.getElementById('compare-date-2').value;

        const result1 = history[index1];
        const result2 = history[index2];

        const container = document.getElementById('comparison-results');
        container.innerHTML = this.generateComparisonHTML(result1, result2);
    }

    static generateComparisonHTML(result1, result2) {
        let html = '<div class="comparison-table">';
        for (const category in result1.results) {
            const cat1 = result1.results[category];
            const cat2 = result2.results[category];
            const change = cat2.score - cat1.score;
            const trend = change > 0 ? '↑' : change < 0 ? '↓' : '→';
            
            html += `
                <div class="comparison-row">
                    <div class="category">${resultCategories[category].name}</div>
                    <div class="score">${cat1.score} → ${cat2.score}</div>
                    <div class="trend ${change > 0 ? 'worse' : 'better'}">${trend}</div>
                </div>
            `;
        }
        html += '</div>';
        return html;
    }
}

class ReminderManager {
    static setReminder(frequency, time) {
        const settings = {
            frequency,
            time,
            enabled: true,
            lastTest: new Date().toISOString()
        };
        localStorage.setItem('reminderSettings', JSON.stringify(settings));
        this.scheduleNextReminder(settings);
    }

    static scheduleNextReminder(settings) {
        if (!settings.enabled) return;

        const now = new Date();
        const [hours, minutes] = settings.time.split(':');
        let nextReminder = new Date();
        nextReminder.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        // 计算下次提醒时间
        switch(settings.frequency) {
            case 'weekly':
                nextReminder.setDate(nextReminder.getDate() + 7);
                break;
            case 'biweekly':
                nextReminder.setDate(nextReminder.getDate() + 14);
                break;
            case 'monthly':
                nextReminder.setMonth(nextReminder.getMonth() + 1);
                break;
        }

        if (nextReminder <= now) {
            nextReminder.setDate(nextReminder.getDate() + 1);
        }

        // 设置提醒
        if (Notification.permission === 'granted') {
            const timeUntilReminder = nextReminder - now;
            setTimeout(() => {
                new Notification('心理健康测试提醒', {
                    body: '是时候进行新的心理健康评估了',
                    icon: '/assets/images/icon.png'
                });
                this.scheduleNextReminder(settings);
            }, timeUntilReminder);
        }
    }

    static async requestPermission() {
        if (Notification.permission !== 'granted') {
            await Notification.requestPermission();
        }
    }
}

// 添加到全局作用域的函数
function exportResult() {
    TestAnalytics.exportResult(currentResults);
}

function showTrendChart() {
    TestAnalytics.showTrendChart();
}

function showComparison() {
    TestAnalytics.showComparison();
}

function saveReminderSettings() {
    const frequency = document.getElementById('reminder-frequency').value;
    const time = document.getElementById('reminder-time').value;
    ReminderManager.setReminder(frequency, time);
    alert('提醒设置已保存！');
}

// 在页面加载时初始化提醒系统
document.addEventListener('DOMContentLoaded', () => {
    ReminderManager.requestPermission();
    const savedSettings = JSON.parse(localStorage.getItem('reminderSettings'));
    if (savedSettings) {
        ReminderManager.scheduleNextReminder(savedSettings);
    }
});

// 主题切换
class ThemeManager {
    static init() {
        const themeToggle = document.getElementById('theme-toggle');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // 初始化主题
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (prefersDark.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        // 主题切换事件
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });

        // 监听系统主题变化
        prefersDark.addEventListener('change', (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// 加载状态管理
class LoadingManager {
    static show() {
        document.getElementById('loading-overlay').classList.add('active');
    }

    static hide() {
        document.getElementById('loading-overlay').classList.remove('active');
    }
}

// 错误提示管理
class ToastManager {
    static showError(message) {
        const toast = document.getElementById('error-toast');
        const messageEl = toast.querySelector('.error-message');
        messageEl.textContent = message;
        
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// 表单验证
class FormValidator {
    static validateField(input, rules) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        
        for (const rule of rules) {
            const isValid = rule.validate(input.value);
            if (!isValid) {
                formGroup.classList.add('error');
                errorMessage.textContent = rule.message;
                return false;
            }
        }
        
        formGroup.classList.remove('error');
        errorMessage.textContent = '';
        return true;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
}); 