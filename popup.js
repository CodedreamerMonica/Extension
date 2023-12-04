// Get all the URLs present in a web page
function getAllUrls() {
    // Select all anchor elements on the page
    var anchors = document.querySelectorAll('a');
    
    // Create an array to store the URLs
    var urls = [];
    
    // Iterate through each anchor element
    anchors.forEach(function(anchor) {
      // Get the href attribute of the anchor
      var url = anchor.getAttribute('href');
      
      // Check if the URL is not null and is not an empty string
      if (url && url.trim() !== '') {
        // Add the URL to the array
        urls.push(url);
      }
    });
    
    // Return the array of URLs
    return urls;
  }
  
  // Example: Call the function and log the URLs to the console
  var pageUrls = getAllUrls();
  console.log(pageUrls);
  
