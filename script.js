var collection = [
    { code: 1, label: "The Shawshank Redemption", year: 1994, src: "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg" },
    { code: 2, label: "The Godfather", year: 1972, src: "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg" },
    { code: 3, label: "The Dark Knight", year: 2008, src: "https://image.tmdb.org/t/p/original/vGYJRor3pCyjbaCpJKC39MpJhIT.jpg" },
    { code: 4, label: "Schindler's List", year: 1993, src: "https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" },
    { code: 5, label: "Pulp Fiction", year: 1994, src: "https://image.tmdb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg" },
    { code: 6, label: "Inception", year: 2010, src: "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg" },
    { code: 7, label: "Fight Club", year: 1999, src: "https://image.tmdb.org/t/p/original/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg" },
    { code: 8, label: "Forrest Gump", year: 1994, src: "https://image.tmdb.org/t/p/original/yu26pJwGFUyqTJWMWo1mMgBFJ0N.jpg" },
    { code: 9, label: "The Matrix", year: 1999, src: "https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg" },
    { code: 10, label: "Goodfellas", year: 1990, src: "https://image.tmdb.org/t/p/original/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg" },
    { code: 11, label: "Seven", year: 1995, src: "https://image.tmdb.org/t/p/original/yEbjPcq6VoWSG9KRWqzIbOxoy6W.jpg" },
    { code: 12, label: "Interstellar", year: 2014, src: "https://image.tmdb.org/t/p/original/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg" },
    { code: 13, label: "Parasite", year: 2019, src: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
    { code: 14, label: "The Prestige", year: 2006, src: "https://image.tmdb.org/t/p/original/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg" },
    { code: 15, label: "Gladiator", year: 2000, src: "https://image.tmdb.org/t/p/original/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg" },
    { code: 16, label: "The Lion King", year: 1994, src: "https://image.tmdb.org/t/p/original/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg" },
    { code: 17, label: "Back to the Future", year: 1985, src: "https://image.tmdb.org/t/p/original/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg" },
    { code: 18, label: "The Green Mile", year: 1999, src: "https://image.tmdb.org/t/p/original/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg" },
    { code: 19, label: "Saving Private Ryan", year: 1998, src: "https://image.tmdb.org/t/p/original/agKJFDTCiPbzh4Otb1KVAoikZaG.jpg" },
    { code: 20, label: "The Pianist", year: 2002, src: "https://image.tmdb.org/t/p/original/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg" }
];

var box = document.getElementById("display-area");

function render() {
    var box = document.getElementById("display-area");
    var savedIds = JSON.parse(localStorage.getItem('galaxy_watchlist')) || [];
    box.innerHTML = "";
    
    for (var j = 0; j < collection.length; j++) {
        var obj = collection[j];
        var isAdded = savedIds.includes(obj.code);
        
        var btnText = isAdded ? "✔︎ Added" : "+ Add to Watchlist";
        var btnBg = isAdded ? "#28a745" : "#f1c40f"; 
        var btnColor = isAdded ? "#fff" : "#333";

    
        var itemHTML = '<div class="m-item">' +
                       '<a href="details.html?id=' + obj.code + '" style="text-decoration:none; color:inherit; display:block;">' +
                           '<img src="' + obj.src + '">' +
                           '<h4>' + obj.label + '</h4>' +
                       '</a>' +
                       '<p>Release: ' + obj.year + '</p>' +
                       '<button style="width: 90%; margin: 0 5% 10px 5%; padding: 8px; background: ' + btnBg + '; color: ' + btnColor + '; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;" onclick="addToWatchlist(' + obj.code + ', this)">' + btnText + '</button>' +
                       '</div>';
        box.innerHTML += itemHTML;
    }
}


render();

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




function addToWatchlist(movieCode, btnElement) {
    var savedIds = JSON.parse(localStorage.getItem('galaxy_watchlist')) || [];

    if (!savedIds.includes(movieCode)) {
        savedIds.push(movieCode);
        localStorage.setItem('galaxy_watchlist', JSON.stringify(savedIds));
        
        // Change the button instantly to Green
        btnElement.style.background = "#28a745"; 
        btnElement.style.color = "#fff";
        btnElement.innerText = "✔︎ Added";
    }
}
