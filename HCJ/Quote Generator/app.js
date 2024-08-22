// const quote = document.getElementById("quote") 
// const author = document.getElementById("author") 
// const api = 'https://dummyjson.com/quotes/random'

// async function getQuote(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     quote.innerHTML = data.quote;
//     author.innerHTML = data.author; 

// }

// document.getElementById("btn").addEventListener("click", function() {
//     getQuote(api); // Fetch and display a new quote
// });

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const loading = document.getElementById("loading");
const api = 'https://dummyjson.com/quotes/random';

// Function to fetch and display a random quote
async function getQuote(url) {
    // Show the loading message
    loading.style.display = "block";
    quote.innerHTML = "loadingg"; // Clear the previous quote
    author.innerHTML = "loadingg"; // Clear the previous author
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Hide the loading message and display the quote
        loading.style.display = "none";
        quote.innerHTML = data.quote;
        author.innerHTML = data.author; 
    } catch (error) {
        // Hide the loading message and show an error message
        loading.style.display = "none";
        quote.innerHTML = "Failed to load quote.";
        author.innerHTML = "";
    }
}

// Adding an event listener to the button to fetch a new quote when clicked
document.getElementById("btn").addEventListener("click", function() {
    getQuote(api); // Fetch and display a new quote
});

// Initial quote when the page loads
getQuote(api);