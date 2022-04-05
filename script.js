
let searchtxt = document.getElementById('searchField');
let searchres = document.getElementById('searchResults');
let atfirst = document.getElementById('cats');

onload(fetchGiphyAPI('cat'))

function searchbtn() {
    
searchres.InnerHTML = "";
fetchGiphyAPI(searchtxt.value);
};

function fetchGiphyAPI(keyword){
    
if(!keyword){
return;
}

searchres.replaceChildren("")
var url= "https://api.giphy.com/v1/gifs/search";
var param= "api_key=LpYtgf82wWflmoCO9a595AAzY1fuW4Vg&limit=5&q=" + encodeURIComponent(keyword);
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4 && this.status === 200) {
    processResponse(this.responseText);

  }
});

xhr.open("GET", url + "?" + param  );

xhr.send();
}


function processResponse(responseText) {
     var resp = JSON.parse(responseText);
     
    for (item of resp.data) {
        let imgElement = document.createElement("img"); 
        imgElement.src = item.images.downsized_medium.url;
        imgElement.alt = item.title;
        
        searchres.appendChild(imgElement);
        
        }
        }
