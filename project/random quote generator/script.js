const quote = document.getElementById("quote")
const author = document.getElementById("author")
const button = document.getElementById("btnnewquote")

const quotes = [{
      quote: "The only impossible journey is the one you never begin",
      author: "Tony Robbins"  
    },
    {
      quote: "Keep your face to the sunshine and you cannot see a shadow",
      author: "Hellen Keller"
    },
    {
      quote: "You don't have to become something you're not to be better than you were",
      author: "Sidney Poitier"
    },
    {
      quote: "Start where you are. Use what you have. Do what you can",
      author: "Arthur Ashe"
    },
    {
      quote: "Action is the foundational key to all success",
      author: "Pablo Picasso"
    },
    {
      quote: "Never let the fear of striking out keep you from playing the game",
      author: "Babe Ruth"
    },
    {
      quote: "The way to get started is to quit talking and begin doing",
      author: "Walt Disney"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life",
      author: "Steve Jobs"
    },
    {
      quote: "If you look at what you have in life, you'll always have more",
      author: "Oprah Winfrey"
    },
    {
      quote: "Life is what happens when you're busy making other plans",
      author: "John Lennon"
    },
    {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier",
      author: "Mother Teresa"
    },
    {
      quote: "When you reach the end of your rope, tie a knot in it and hang on",
      author: "Franklin D Roosevelt"
    },
    {
      quote: "Always remember that you are absolutely unique. Just like everyone else",
      author: "Margaret Mead"
    },
    {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant",
      author: "Robert Louis Stevenson"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams",
      author: " Eleanor Roosevelt"
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light",
      author: "Aristotle"

    },
    {
      quote: "Whoever is happy will make others happy too",
      author: "Anne Frank"
    },
    {
      quote: "You will face many defeats in life, but never let yourself be defeated",
      author: "Maya Angelou"
    },
    {
      quote: "Never let the fear of striking out keep you from playing the game",
      author: "Babe Ruth"
    },
    {
      quote: "Life is either a daring adventure or nothing at all",
      author: "Hellen Keller"
    },
]

button.addEventListener("click", () => {
    const finalquote = Math.floor(Math.random() * quotes.length)
    const randomquote = quotes[finalquote]

    quote.textContent = randomquote.quote
    author.textContent = randomquote.author

})
