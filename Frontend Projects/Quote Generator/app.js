// CODE 1

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



// IMPROVEMENT 0.1

const quote = document.getElementById("quote");
const author = document.getElementById("author");
// const tweet = document.getElementById("tweet")
const api = 'https://dummyjson.com/quotes/random';

// Function to fetch and display a random quote
async function getQuote(url) {
    // Show the loading message
    loading.style.display = "block";
    quote.innerHTML = "loading"; // Clear the previous quote
    author.innerHTML = "loading"; // Clear the previous author
    
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


document.getElementById("btn").addEventListener("click", function() {
    getQuote(api); 
});

// Initial quote when the page loads
getQuote(api);


document.getElementById("tweet").addEventListener("click" , function(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML , "Tweet Window" , "width=500 , height = 260")
})

