//jQuery

//GET Method, and read data from server
$.get(URL, headers);

//POST Method, send data to server
$.post(URL, data, headers);

//Ajax constructor
$.ajax({
    url: '', //Url to the server
    method: '', //GET, POST, PUT, DELETE
    data: '', //DATA IS NOT VALID FOR GET AND DELETE, otherwise data to be stored are added here
    dataType: '', //mime type (application/json)
    headers:{},
    success: function(data){}, //Response from the server will be in success variable data
    error: function(error){} //Error code will be stored in error argument
});

$.post('URL', {data:data}, {}).then( 
    function(response){},
    function(error){}
);

function makeCall(apiURL, method, data, cbSuccess, cbError)
{
    $.ajax({
        url: apiUrl,
        method: method, 
        data: data,
        dataType: 'applicaiton/json', 
        success: cbSuccess, //success: this[cbSuccess]
        error: cbError //error: this[cbError]
    });
}

function cbSuccess(data){}

function cbError(error){}

function googleOk(data){}

makeCall('http://google.com', 'GET', {}, 'googleOk', 'googleError');
makeCall('http://facebook.com', 'GET', {}, 'facebookOk', 'facebokError');
makeCall('http://google.com', 'POST', {username: 123}, 'googlePostOk', 'googleError');


//OLD JS version

let xhr = new XMLHttpRequest();
xhr.addEventListener('loadend', cbSuccess);
xhr.open('GET', 'http://google.com');
xhr.send();

//Fetch
fetch('http://google.com').then(
    function(data){}, 
    function(error){}
)

function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    });