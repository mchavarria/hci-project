
function changeLanguage(languageCode) {
    console.log('Language changed to ' + languageCode);
}

function homePage() {

    // redirect to the other page
    let path = window.location.host.includes('github') ? '/hci-project/' : '/';
    window.location.href = window.location.origin + path + '/index.html';
}