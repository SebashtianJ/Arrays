const myArray = [10, 20, 30];
console.log(myArray); // [10, 20, 30]

console.log(myArray[0]); // 10
console.log(myArray[1]); // 20

myArray[0] = 99;
console.log(myArray); // [99, 20, 30]

let food = ['burgers', 'pizza', 'wings', 'nuggets']
console.log(food);

console.log(food.length); // 4

food.push('nachos');
console.log(food); // Now includes 'nachos'

food.splice(1, 1); // Removes 'pizza'
console.log(food);

let colors = ['red', 'blue', 'green'];
console.log(colors);

let mixed = ['hello', 42, true, null];
console.log(mixed); 

let cities = ['Atlanta', 'New York', 'Chicago'];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

cities[cities.length - 1] = 'Houston';
console.log(cities);

let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
console.log(numbers);

let lastItem = numbers[numbers.length - 1];
console.log(lastItem);

// Part 1
const foods = ["Pizza", "Tacos", "Sushi", "Burgers", "Salad"];
const list = document.getElementById("foodList");

for (let i = 0; i < foods.length; i++) {
    const li = document.createElement("li");
    li.textContent = foods[i];
    list.appendChild(li);
}

// Part 2
const quotes = ["Believe in yourself.", "Keep going, you're doing great!", "Never stop learning", "Strive for progress, not perfection.", "Every day is a second chance."];

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
}

// Part 3
const names = ["Kayla", "Chris", "Jordan", "Ava", "Miles"];

function searchName() {
    const userInput = document.getElementById("searchBox").value.trim();
    const result = names.includes(userInput);
    document.getElementById("searchResult").textContent = result ? `${userInput} is in the list.` : `${userInput} was not found.`;
}

// Part 4
const images = [
    "https://via.placeholder.com/200x150?text=1",
    "https://via.placeholder.com/200x150?text=2",
    "https://via.placeholder.com/200x150?text=3",
]

let index = 0;

function showImage() {
    document.getElementById("gallery").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}
showImage();

// Part 5
const colors1 = ["lightblue", "lightgreen", "lavender", "peachpuff", "lightgray"];
let colorIndex = 0;

function changeColor() {
    document.body.style.backgroundColor = colors1[colorIndex];
    colorIndex = (colorIndex + 1) % colors1.length;
}