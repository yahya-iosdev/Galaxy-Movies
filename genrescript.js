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

function addToWatchlist(movieCode) {
    
    var savedIds = JSON.parse(localStorage.getItem('galaxy_watchlist')) || [];

 
    if (!savedIds.includes(movieCode)) {
        
        savedIds.push(movieCode);
        
       
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
