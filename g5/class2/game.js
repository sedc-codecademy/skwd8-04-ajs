/*
    Create a game where you have 2 main black circles (black holes) 
    and one small red circle which will move as pointer moves on screen.

    When red circle enters into black circle you should display a message
    game lost in alert.

    When red circle moves for 10s without entering in black circle you
    should display message game won in alert.
*/
function endGame()
{
    alert(' You lost! Ha Ha ');
}

function createBlackCircles()
{
    let c = document.createElement('div');
    c.setAttribute('class', 'black-circle');
    c.onmouseover = endGame;
    document.body.appendChild(c);
}

createBlackCircles();
createBlackCircles();

let span = document.createElement('span');
span.setAttribute('class', 'red-circle');

document.addEventListener('mousemove', function(e){
    console.log(e);
    span.style.top = e.clientY-20;
    span.style.left = e.clientX-20;
}, false);

document.body.appendChild(span);

setTimeout(() => {
    alert('You won! Alal da ti e')
}, 10000)