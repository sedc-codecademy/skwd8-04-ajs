function findLocation()
{
    navigator.geolocation.getCurrentPosition(
        foundCurrentLocation, //This is success callback function
        notFoundLocation, //This is error callback function
        {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        }); //This isn't function its object :)
}

function foundCurrentLocation(geoLoc)
{
    console.log(geoLoc);
    let span = document.querySelector('.geoLocation > div > span:last-child');
    span.innerHTML = `Latitude: ${geoLoc.coords.latitude}, Long: ${geoLoc.coords.longitude}`;

    // let link = `https://www.openstreetmap.org/#map=18/${geoLoc.coords.latitude}/${geoLoc.coords.longitude}`;
    // window.open(link, 'blank')

    drawSpot(geoLoc.coords);
}

function notFoundLocation(error)
{
    console.log('Error: ', error);
}

function grantNotificationAccess()
{
    let promise = Notification.requestPermission(
        (cb) => {
            if(cb === 'granted')
            showNotification();
        }        
    );

    console.log(promise)
}

//grantNotificationAccess();

function showNotification()
{
    var options = {
        body: 'This is our first notify',
    }
    var n = new Notification('Hi there', options);
    console.log(n);
}

function drawSpot(coordinates)
{
    let lat = coordinates.latitude; //X
    let long = coordinates.longitude; //Y

    let ww = window.innerWidth;
    let wh = window.innerHeight;

    console.log(lat, long, ww, wh);

    let x = (ww * lat) / 100;
    let y = (wh * long) / 100;
    
    console.log(x, y);
}