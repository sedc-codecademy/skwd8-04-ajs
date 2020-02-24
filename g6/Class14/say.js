function hello() {
    console.log("Hello from say module");
}
function bye() {
    console.log("Bye from say module");
}

module.exports = {
    hello: hello,
    bye: bye
};