//Definition of events
//Event def in HTML
function buttonClicked()
{
    alert('Button was clicked');
}

function buttonMouseOver(evt)
{
    console.log(evt)
    
    let name = evt.target ? evt.target.getAttribute('name') 
                            : evt.getAttribute('name');
    console.log(`Button ${name} was mouseover`);
}

//Event on newly created element
let btn = document.createElement('button');
btn.setAttribute('name', 'btn3');
btn.innerHTML = 'Click Me3!';
btn.onmouseover = buttonMouseOver;
document.body.appendChild(btn);

//Event on elements using DOM 
let elements = document.querySelectorAll(".btn");
elements.forEach((element) => {
    element.addEventListener("mouseover", buttonMouseOver, false);
})

// elements.forEach((element) => {
//     element.addEventListener("mouseover", function(evt){
//         if(evt.target.getAttribute('name') === 'btn4')
//         callThisFn();
//         else if(evt.target.getAttribute('name') === 'btn5')
//         callThisOtherFn();
//     }, false);
// })

let btn1 = document.querySelector('[name="btn1"]');
console.log(btn1)
//btn1.dispatchEvent(new Event('click'))


//Element configuration (DOM Tree)
console.log(btn1.style)
if( ! btn1.style.backgroundColor)
btn1.style.backgroundColor = 'red';
btn1.style.position = 'absolute';
btn1.style.top = '100px'

btn1.onmouseenter = function(){
    btn1.style.top = 0;
}

btn1.onmouseleave = function()
{
    setTimeout(() => {
        btn1.style.top = '100px'
    }, 500)
}