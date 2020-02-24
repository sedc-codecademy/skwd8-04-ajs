function hey(name){
    return `Hey there ${name}! How are ya?`;
}
function bye(name){
    return `Bye there ${name}! Nice knowing ya!`;
}
function sum(num1, num2){
    return num1 + num2;
}
// module.exports = 1; // will export only the number 1

module.exports = {
    sayBye: bye, 
    sayHey: hey
};