const SHOP_ITEMS = {
    food: [
        { id: 'basic-food', name: '普通食物', price: 10, value: 20, healthBonus: 5 },
        { id: 'premium-food', name: '高级食物', price: 30, value: 50, healthBonus: 15 },
    ],
    toys: [
        { id: 'ball', name: '小球', price: 20, happinessBonus: 30 },
        { id: 'puzzle', name: '益智玩具', price: 50, happinessBonus: 60 },
    ]
};

class Shop {
    static buyItem(user, itemId) {
        const item = this.findItem(itemId);
        if (!item) return false;
        
        if (user.coins >= item.price) {
            user.coins -= item.price;
            user.inventory.push(item);
            user.save();
            return true;
        }
        return false;
    }

    static findItem(itemId) {
        return [...SHOP_ITEMS.food, ...SHOP_ITEMS.toys]
            .find(item => item.id === itemId);
    }
} 