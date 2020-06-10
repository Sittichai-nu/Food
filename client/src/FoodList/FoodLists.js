export function formatPrice(price) {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

const foodItems = [
    {
        itemName: "Cheese Rolls",
        section: "Appetizers",
        price: 3.75
    },
    {
        itemName: "Crispy Rolls",
        section: "Appetizers",
        price: 3.75
    },
    {
        itemName: "Chicken Satay",
        section: "Appetizers",
        price: 6.75
    },
    {
        itemName: "Fish Cake ",
        section: "Appetizers",
        price: 7.75
    },
    {
        itemName: "Sausages",
        section: "Appetizers",
        price: 5.75
    },
    {
        itemName: "Grilled Beef balls",
        section: "Appetizers",
        price: 5.75
    },
    {
        itemName: "Fried Tofu",
        section: "Appetizers",
        price: 4.75
    },
    {
        itemName: "Pad Thai",
        section: "Nooddle",
        price: 10.95
    },
    {
        itemName: "Drunken Noodle",
        section: "Nooddle",
        price: 10.95
    },
    {
        itemName: "Pad Woonsen",
        section: "Nooddle",
        price: 10.95
    },
    {
        itemName: "Pad See Ew",
        section: "Nooddle",
        price: 10.95
    },
    {
        itemName: "Stir fried Basil",
        section: "Rice Dish",
        price: 10.95
    },
    {
        itemName: "Stir Fried Gralic",
        section: "Rice Dish",
        price: 10.95
    },
    {
        itemName: "Stir fried Beans",
        section: "Rice Dish",
        price: 10.95
    },
    {
        itemName: "Sweet & Sour",
        section: "Rice Dish",
        price: 10.95
    },
    {
        itemName: "Peanut Sauce",
        section: "Rice Dish",
        price: 10.95
    },
    {
        itemName: "Stir fried Cashew",
        section: "Rice Dish",
        price: 10.95
    },
    {
        itemName: "Tom Yum",
        section: "Soups",
        price: 9.95
    },
    {
        itemName: "Tom Kha",
        section: "Soups",
        price: 9.95
    },
    {
        itemName: "Beef Noodle Soup",
        section: "Soups",
        price: 9.95
    },
    {
        itemName: "Papaya salad",
        section: "Salad",
        price: 9.95
    },
    {
        itemName: "Fish salad",
        section: "Salad",
        price: 9.95
    },
    {
        itemName: "Clear Noodle salad",
        section: "Salad",
        price: 9.95
    },
    {
        img: "/img/wt.jpg",
        itemName: "Won Ton",
        section: "Soups",
        price: 9.95
    },
    {
        itemName: "Sweet Rice Mango",
        section: "Desserts",
        price: 5.95
    },
    {
        itemName: "Coconut Ice Cream",
        section: "Desserts",
        price: 5.95
    },
    {
        itemName: "Thai Custard",
        section: "Desserts",
        price: 5.95
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});

