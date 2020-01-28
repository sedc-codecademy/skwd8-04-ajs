//Resistor ohms

//Make a function that will accept 5 color names, and it will return the
// value of the resistor as string e.g 470 ohms with 5% for input values
// fn('yellow', 'violet', 'black', 'gold')
// function should return function as return

function ohms()
{
    let colors = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };

    let perc = {
        black: 0,
        gold: 5,
        silver: 10,
        white: 15
    }

    return (p1, p2, p3, p4, p5) =>
    {
        return [
                parseInt(
                    [colors[p1], colors[p2], colors[p3]].join("")
                ) * Math.pow(10, colors[p4]), 
                
                perc[p5]
            ];
    }
}

//Make a function that will check for a word is a "Palindrome"
//e.g kalabalak, ama, abba, 

function checkPalindrome(word)
{
    let rev = word.split("").reverse().join("");
console.log(word, rev);
    return  word === rev    //"true/false"
}


//Pangram function which will accept a sentence 
//function should check does sentence contain every letter from 
//the alphabet

function pangram(sentence)
{
    let chars = [];
    for(let i = 65; i <= 90; i++)
    chars.push(String.fromCharCode(i));
    
    let sentenceChars = sentence.split("");
    
    let r = chars.filter((char) => {
        return sentenceChars.indexOf(char.toLowerCase()) > -1 ||
            sentenceChars.indexOf(char) > -1
    });

    return r//true/false
}