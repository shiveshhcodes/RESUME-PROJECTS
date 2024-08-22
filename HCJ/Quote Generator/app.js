const quote = document.getElementById("quote") 
const author = document.getElementById("author") 

const api = "https://api.quotable.io/quotes/random?tags=technology,famous-quotes";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author; 

}

getQuote(api);