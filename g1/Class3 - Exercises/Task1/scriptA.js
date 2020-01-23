//Selectors
let ul = document.querySelector('ul');
let button = document.querySelector('button');
let arrColor = ['red', 'blue', 'violet', 'purple', 'green'];

//event generate list with colors
//code here
button.addEventListener('click', function(){
    ul.innerHTML = '';
    //option 1
    // for(let i=0; i<arrColor.length; i++){
    //     ul.innerHTML += `<li style='color:${arrColor[i]}'>${arrColor[i]}</li>`
    // }
    //option 2
    for(let i=0; i<arrColor.length; i++){
        let li = document.createElement('li');
        li.innerText = arrColor[i];
        li.style.color = arrColor[i];

        ul.appendChild(li);
    }
});