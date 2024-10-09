let submitBtn = document.getElementById("submit-btn");
let generateGif = () => {
  let loader = document.querySelector(".loader");
  loader.style.display = "block";
  document.querySelector(".wrapper").style.display = "none";
  let q = document.getElementById("search-box").value;
  let gifCount = 10;
  let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
  document.querySelector(".wrapper").innerHTML = "";}