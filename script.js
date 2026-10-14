
const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Believe in yourself and all that you are.",
        author: "Christian D. Larson"
    },
    {
        text: "Every day is a chance to learn something new.",
        author: "Unknown"
    },
    {
        text: "Small steps every day lead to big results.",
        author: "Unknown"
    }
];

let previousIndex = -1;

function newQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    document.getElementById("quote").textContent =
        quotes[randomIndex].text;

    document.getElementById("author").textContent =
        "— " + quotes[randomIndex].author;
}
