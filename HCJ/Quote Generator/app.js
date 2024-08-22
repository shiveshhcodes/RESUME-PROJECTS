const quote = document.getElementById("quote") 
const author = document.getElementById("author") 
const api = 'https://dummyjson.com/quotes/random'

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author; 

}
button.addEventListener("click", updateQuote)
getQuote(api);