let submitBtn = document.getElementById("submit-btn");

// Function to fetch GIFs from the Giphy API
let generateGif = () => {
  let loader = document.querySelector(".loader");
  loader.style.display = "block"; // Show loader
  document.querySelector(".wrapper").style.display = "none"; // Hide GIFs

  let q = document.getElementById("search-box").value; // Get user input
  let gifCount = 10; // Number of GIFs to display
  let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;

  // Clear previous GIFs
  document.querySelector(".wrapper").innerHTML = "";

  // Fetch GIFs from API
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let gifs = data.data;
      gifs.forEach((gif) => {
        let container = document.createElement("div");
        container.classList.add("container");

        let img = document.createElement("img");
        img.src = gif.images.fixed_height.url;

        let button = document.createElement("button");
        button.innerText = "Download";
        button.onclick = () => window.open(gif.images.fixed_height.url, "_blank");

        container.appendChild(img);
        container.appendChild(button);

        document.querySelector(".wrapper").appendChild(container);
      });

      loader.style.display = "none"; // Hide loader
      document.querySelector(".wrapper").style.display = "grid"; // Show GIFs
    })
    .catch((error) => {
      console.error("Error fetching GIFs:", error);
      loader.style.display = "none"; // Hide loader if error occurs
    });
};

// Event listener for the submit button
submitBtn.addEventListener("click", generateGif);

// Optional: trigger search on "Enter" key press
document.getElementById("search-box").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateGif();
  }
});
