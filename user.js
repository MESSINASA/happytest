class User {
    constructor(username) {
        this.username = username;
        this.coins = 100;
        this.inventory = [];
        
        // 从本地存储加载用户数据
        const userData = JSON.parse(localStorage.getItem(`user_${username}`) || '{}');
        if (userData.coins) this.coins = userData.coins;
        if (userData.inventory) this.inventory = userData.inventory;
    }

    static login(username, password) {
        // 简单的本地存储验证
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[username] === password) {
            return new User(username);
        }
        return null;
    }

    static register(username, password) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[username]) {
            return false;
        }
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        
        // 创建新用户时初始化数据
        const user = new User(username);
        user.save();
        return true;
    }

    save() {
        localStorage.setItem(`user_${this.username}`, JSON.stringify({
            coins: this.coins,
            inventory: this.inventory
        }));
    }
} 