class Pet {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.health = 100;
        this.happiness = 100;
        this.hunger = 100;
        this.lastUpdate = Date.now();
        this.level = 1;
        this.exp = 0;
    }

    static TYPES = {
        cat: {
            name: '猫咪',
            image: 'assets/images/pets/cat.png'
        },
        dog: {
            name: '小狗',
            image: 'assets/images/pets/dog.png'
        },
        rabbit: {
            name: '兔子',
            image: 'assets/images/pets/rabbit.png'
        }
    };

    update() {
        const now = Date.now();
        const timePassed = (now - this.lastUpdate) / 1000;
        
        this.hunger = Math.max(0, this.hunger - timePassed * 0.1);
        this.happiness = Math.max(0, this.happiness - timePassed * 0.05);
        this.health = Math.max(0, this.health - timePassed * 0.02);

        this.lastUpdate = now;
    }

    getImage() {
        return Pet.TYPES[this.type]?.image || Pet.TYPES.cat.image;
    }

    // ... 其他现有方法保持不变 ...
} 