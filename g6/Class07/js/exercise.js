//create html with one button that when is clicked it will show alert('Hello);
$(function () {
    $('button').on('click', function () {
       //alert('Hello');
       $('#greetingContainer').text('Hello');
       setTimeout(() => $('#greetingContainer').text(''), 3000); 
    });

    //also show in the html counter (number that will be increased continuosly by 1)
    let counter = 0;
    let intervalId = setInterval(function () {
        counter++;
        $('#counterContainer').text(counter);
    }, 1000);

    //this will freeze the display
    // while (true) {
    //     counter++;
    //     $('#counterContainer').text(counter);
    // }

    //try to implement pausing the counter 
//button that when clicked will pause the counter and change its name to resume
//when resume is clicked counter should continue
let running = true;
$('#pauseCounter').on('click', function () {
    running = !running;
    if (running) {
        $(this).text('Pause');
        intervalId = setInterval(function () {
            counter++;
            $('#counterContainer').text(counter);
        }, 1000);
    }
    else {
        $(this).text('Resume');
        clearInterval(intervalId);
    }
});
//setInterval returns id, 
//use that id for calling the function clearInterval(id);
});


