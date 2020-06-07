export function formatPrice(price) {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

export const foodItems = [
    {
        name: "Cheese Rolls",
        section: "Appetizers",
        price: 3.75
    },
    {
        name: "Crispy Rolls",
        section: "Appetizers",
        price: 3.75
    },
    {
        name: "Chicken Satay",
        section: "Appetizers",
        price: 6.75
    },
    {
        name: "Fish Cake ",
        section: "Appetizers",
        price: 7.75
    },
    {
        name: "Sausages",
        section: "Appetizers",
        price: 5.75
    },
    {
        name: "Grilled Beef balls",
        section: "Appetizers",
        price: 5.75
    },
    {
        name: "Fried Tofu",
        section: "Appetizers",
        price: 4.75
    },
    {
        name: "Pad Thai",
        section: "Nooddle",
        price: 10.95
    },
     {
        name: "Drunken Noodle",
        section: "Nooddle",
        price: 10.95
    },
    {
        name: "Pad Woonsen",
        section: "Nooddle",
        price: 10.95
    },
    {
        name: "Pad See Ew",
        section: "Nooddle",
        price: 10.95
    },
    {
        name: "Stir fried Basil",
        section: "Rice Dish",
        price: 10.95
    },
    {
        name: "Stir Fried Gralic",
        section: "Rice Dish",
        price: 10.95
    },
    {
        name: "Stir fried Green Bean",
        section: "Rice Dish",
        price: 10.95
    },
    {
        name: "Sweet & Sour",
        section: "Rice Dish",
        price: 10.95
    },
    {
        name: "Peanut Sauce",
        section: "Rice Dish",
        price: 10.95
    },
    {
        name: "Stir fried Cashew",
        section: "Rice Dish",
        price: 10.95
    },
    {
        name: "Tom Yum",
        section: "Soups",
        price: 9.95
    },
    {
        name: "Tom Kha",
        section: "Soups",
        price: 9.95
    },
    {
        name: "Beef Noodle Soup",
        section: "Soups",
        price: 9.95
    },
    {
        name: "Papaya salad",
        section: "Salad",
        price: 9.95
    },
    {
        name: "Fish salad",
        section: "Salad",
        price: 9.95
    },
    {
        name: "Clear Noodle salad",
        section: "Salad",
        price: 9.95
    },
    {
        img: "/img/wt.jpg",
        name: "Won Ton",
        section: "Soups",
        price: 9.95
    },
    {
        name: "Sweet Rice Mango",
        section: "Desserts",
        price: 5.95
    },
    {
        name: "Coconut Ice Cream",
        section: "Desserts",
        price: 5.95
    },
    {
        name: "Thai Custard",
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

