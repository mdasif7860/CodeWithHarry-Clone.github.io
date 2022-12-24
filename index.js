const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input");
searchBtn.addEventListener('click', function () {
    if (searchInput.style.display == "none") {
        searchInput.style.display = "block";
    }
    else {
        searchInput.style.display = "none";
    }
});

