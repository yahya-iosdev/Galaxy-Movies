function setModeA() {
    document.body.className = "mode-a";
    document.cookie = "app_style=mode-a; path=/; max-age=2592000";
}

function setModeB() {
    document.body.className = "mode-b";
    document.cookie = "app_style=mode-b; path=/; max-age=2592000";
}

window.onload = function() {
    var allCookies = document.cookie.split(';');
    var styleFound = false;

    for(var k=0; k < allCookies.length; k++) {
        var pair = allCookies[k].trim();
        if (pair.indexOf("app_style=") == 0) {
            var val = pair.substring(10, pair.length);
            document.body.className = val;
            styleFound = true;
            break;
        }
    }

    if (!styleFound) {
        setModeB(); 
    }
};
// Add this to script.js and genrescript.js
function addToWatchlist(movieCode) {
    // 1. Open the notebook (get existing saved movies)
    // If the notebook is empty, create a new blank array []
    var savedIds = JSON.parse(localStorage.getItem('galaxy_watchlist')) || [];

    // 2. Check if the movie is already in the notebook
    if (!savedIds.includes(movieCode)) {
        // 3. If it's not there, write it down
        savedIds.push(movieCode);
        
        // 4. Save the updated notebook back to the browser
        localStorage.setItem('galaxy_watchlist', JSON.stringify(savedIds));
        
        alert("Added to Watchlist!");
    } else {
        alert("This movie is already in your Watchlist!");
    }
}
document.getElementById('movieSearch').addEventListener('input', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    let movies = document.querySelectorAll('.m-item');

    movies.forEach(movie => {
        let title = movie.querySelector('h4').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
});