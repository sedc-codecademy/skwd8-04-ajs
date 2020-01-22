let APIURL = 'https://swapi.co/api/';

$(document).ready(function(){
    getFilms(); //https://swapi.co/api/films
});

function makeCall(apiURL, method, data, cbSuccess, cbError)
{
    let that = this;

    $.ajax({
        url: apiURL,
        method: method, 
        data: data,
        processData: false, 
        success: that[cbSuccess],
        error: that[cbError]    
    })
}

function generalError(error)
{
    console.log(error);
}

function printFilms(data)
{
    if(data.results)
    data.results.map(function(film){
        $("table").append(`<tr>
            <td>${film.title}</td>
            <td>episode_id</td>
            <td>opening_crawl</td>
            <td>director</td>
            <td>producer</td>
            <td>release_date</td>
            <td>species</td>
            <td>starships</td>
            <td>vehicles</td>
            <td>characters</td>
            <td>planets</td>
            <td>url</td>
            <td>created</td>
            <td>edited</td>
        </tr>`);
    });
}

function getFilms(){
    makeCall(`${APIURL}films/`, 'GET', {}, 'printFilms', 'generalError');
}