let movieNameRef = document.getElementById("movie-name");
let searchBtn  = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = ()=>{
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg"> Please Enter Movie Name</h3>`
    }

    else{
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.imdbRating);
            console.log(data.Rated);

            result.innerHTML = `
            <div class="info">
            <img src = ${data.Poster} class="poster">
            `;
        });
    }
}


