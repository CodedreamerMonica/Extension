chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // tabs[0] will contain information about the current active tab
    var currentUrl = tabs[0].url;

    // Log the URL to the console (optional)
    alert(currentUrl);

    // Now you can use the 'currentUrl' variable in your script as needed
});

