function wikiAPI() {
//define variables
   //create an xhr object
   //define base URL for API and insert searchTerm variable    
   var searchTerm = document.getElementById('searchTerm').value;
   var connect = new XMLHttpRequest();
   var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

//open the API call
   //use XHR.open to GET a file from the API
   connect.open('GET', url);

//define the actions that will happen when the response is returned:, parse and display the data
   //load and parse the resposne as a JSON data object
   //console.log the data object to see what you got as a response
   //locate the branch of the object that is of interest
   //loop through the branch and output the Wiki pages to the HTML page
   connect.onload = function () {
       var wikiObject = JSON.parse(this.response);
       //console.log(wikiObject);
       //console.log(wikiObject.query.pages);
       var pages = wikiObject.query.pages;
       for (var i in pages) {
           var newDiv = document.createElement("div");
           newDiv.setAttribute('class', 'row h4');
           document.getElementById("wiki").appendChild(newDiv);
           newDiv.innerText = pages[i].title;
       }
   }

   //send the API request to the server
   connect.send();
}