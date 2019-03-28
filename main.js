var quotesContainer = document.getElementById("quoted");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
   
    for (i = 0; i < data.length; i++) {
      htmlString += "<div> <p> ~" + data[i].quote + "~ by " + data[i].character + "</p>"+ '<img src="' + data[i].image + '"/>' + "</div>";
    }
    
    quotesContainer.insertAdjacentHTML('beforeend', htmlString);
  }
  
  

