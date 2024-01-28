function filterService(service) {
    console.log('Service selected ' + service);
}

function clickPress(event) {
    if (event.keyCode == 13) {
        // "enter"
        searchMovie();
    }
}

function searchMovie() {
    let searchInput = document.querySelector('.search-input').value ?? null;
    console.log(searchInput);
    let page = 'search/';
    switch (true) {
        case searchInput.includes("rocky"):
            console.log("rocky");
            page += 'rocky';
            break;
        case searchInput.includes("karate"):
            console.log("karate kid");
            page += 'karate_kid';
            break;
        default:
            console.log("No result");
            page += 'empty';
    }

    // redirect to the other page
    let path = window.location.host.includes('github') ? '/hci-project/' : '/';
    window.location.href = window.location.origin + path + page + '.html';
}