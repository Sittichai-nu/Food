const mongoose = require("mongoose");
const db = require('../models/order')

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/foods"
  );
  const foodItems = [
    {
        item: "Cheese Rolls",
        section: "Appetizers",
        price: 3.75
    },
    {
        item: "Crispy Rolls",
        section: "Appetizers",
        price: 3.75
    },
    {
        item: "Chicken Satay",
        section: "Appetizers",
        price: 6.75
    },
    {
        item: "Fish Cake ",
        section: "Appetizers",
        price: 7.75
    },
    {
        item: "Sausages",
        section: "Appetizers",
        price: 5.75
    },
    {
        item: "Grilled Beef balls",
        section: "Appetizers",
        price: 5.75
    },
    {
        item: "Fried Tofu",
        section: "Appetizers",
        price: 4.75
    },
    {
        item: "Pad Thai",
        section: "Nooddle",
        price: 10.95
    },
    {
        item: "Drunken Noodle",
        section: "Nooddle",
        price: 10.95
    },
    {
        item: "Pad Woonsen",
        section: "Nooddle",
        price: 10.95
    },
    {
        item: "Pad See Ew",
        section: "Nooddle",
        price: 10.95
    },
    {
        item: "Stir fried Basil",
        section: "Rice Dish",
        price: 10.95
    },
    {
        item: "Stir Fried Gralic",
        section: "Rice Dish",
        price: 10.95
    },
    {
        item: "Stir fried Green Bean",
        section: "Rice Dish",
        price: 10.95
    },
    {
        item: "Sweet & Sour",
        section: "Rice Dish",
        price: 10.95
    },
    {
        item: "Peanut Sauce",
        section: "Rice Dish",
        price: 10.95
    },
    {
        item: "Stir fried Cashew",
        section: "Rice Dish",
        price: 10.95
    },
    {
        item: "Tom Yum",
        section: "Soups",
        price: 9.95
    },
    {
        item: "Tom Kha",
        section: "Soups",
        price: 9.95
    },
    {
        item: "Beef Noodle Soup",
        section: "Soups",
        price: 9.95
    },
    {
        item: "Papaya salad",
        section: "Salad",
        price: 9.95
    },
    {
        item: "Fish salad",
        section: "Salad",
        price: 9.95
    },
    {
        item: "Clear Noodle salad",
        section: "Salad",
        price: 9.95
    },
    {
        img: "/img/wt.jpg",
        item: "Won Ton",
        section: "Soups",
        price: 9.95
    },
    {
        item: "Sweet Rice Mango",
        section: "Desserts",
        price: 5.95
    },
    {
        item: "Coconut Ice Cream",
        section: "Desserts",
        price: 5.95
    },
    {
        item: "Thai Custard",
        section: "Desserts",
        price: 5.95
    }
];

db.foodItems