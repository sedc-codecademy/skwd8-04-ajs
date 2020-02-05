//Basic object syntax
let newObject = {};

//Extending object properties along the way
newObject.products = [];
newObject.pages = 10;
newObject.basket = {};
newObject.getProducts = function(){
    return this.products;
}

// let newObject = {
//     products: [],
//     pages: 10,
//     basket: {},
//     getProducts: function(){
//         return this.products;
//     }
// }

//Remove properties form Object
delete newObject.pages;


//Destructing of objects
let products = newObject.products;
let pages = newObject.pages;

let { products, pages, basket } = newObject;

let obj2 = {
    user: {
        private_address: {
            street: 'Str1',
            city: 'City1'
        },
        business_address: {
            street: 'Str1',
            city: 'City2'
        },
        phone: '123123123',
        fax: '1231231231212'
    }
};

//#1 whole user object
let {user} = obj2; 

/*
console.log(user)
{
    private_address: {
        street: 'Str1',
        city: 'City1'
    },
    business_address: {
        street: 'Str1',
        city: 'City2'
    },
    phone: '123123123',
    fax: '1231231231212'
}
*/

//#2 Whole addresses
let {private_address, business_address} = obj2.user;
let { private_address:private, business_address:business} = obj2.user;
/*
    let {object_property_name (AS) variable_name} = obj;
*/


/* 
console.log(private_address) 
{
    street: 'Str1',
    city: 'City1'
}

console.log(business_address)
{
    street: 'Str1',
    city: 'City2'
}
*/

/*
Destructing arrays
*/

let arr1 = [10, 33, 4555, [345, 55]];

//let [a, b, c, d] = arr1; // a = 10, b = 33, c = 4555, d = [345, 55]
let [a, b, ...c] = arr1; // a =  10, b = 33, c = [4555, [345, 55]]

/*
    let users = [{
        name: "User 1",
        phone: "+123123123",
        email: "user1@example.com"
    }, 
    {
        name: "User 2",
        phone: "+2323223232",
        email: "user2@example.com"
    }, 
    {
        name: "User 3",
        phone: "+11231231232",
        email: "user3@example.com"
    }];

    1. Destruct all users to a separate variables.
    2. Get the name from first user, email from second and phone from third

*/

let [user1, user2, user3] = users;
// let {name} = user1;
// let {email} = user2;
// let {phone} = user3;

function getPropertyValue(obj, propertyName)
{
    /*
    {
        name: "User 2",
        phone: "+2323223232",
        email: "user2@example.com"
    }
    */
    return {val} = obj[propertyName];
}

let name = getPropertyValue(user1, 'name');

function basicStuff()
{
    let a = {"a": 10};
    let b = {"b": 20};
    return {a, b};
}

let {a:primary, b:secondary} = basicStuff();

function test(a, b)
{
    console.log(a, b);

    return {a:a, b:b};
}

test(basicStuff());

/*
let w = {
    "widget": {
        "debug": "on",
        "window": {
            "title": "Sample Konfabulator Widget",
            "name": "main_window",
            "width": 500,
            "height": 500
        },
        "image": { 
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "vOffset": 250,
            "alignment": "center"
        },
        "text": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        }
    }
}    
*/

//Extract debug, window, image and text from w Object
let {debug, window:win, image, text:tex} = w.widget;
let {widget:{debug, window:win, image, text:tex}} = w;
let {widget:{text:{hOffset, vOffset}}} = w;

//Make a function that returns two values at once
function imageTextFn()
{
    return {image, tex};
}

//By calling imageTextFn get the src and name property from Image
//let {image:{src:imgSrc, name:imgName}} = imageTextFn();
//imageTextFn().image
//imageTextFn()['image'] or let img = 'image' imageTextFn()[img]

function imageMeta()
{
    let {image:{src:imgSrc, name:imgName}} = imageTextFn();
    return {imgSrc, imgName};
}

function checkImage(src, name)
{
    if(name === 'Img5')
    alert('all good');
    else
    alert('Daj druga slika');
}

checkImage(imageMeta());

//Spread operator

function spread(...a)
{
    let [b, c, d] = a;
    let {widget: {window:win}} = a;//w
}

spread(1,2,3,4,5,6);

spread(w)

//Object methods
let o = {
    name: "John Doe",
    age: 45,
    getAge: () =>
    {
        return this.age;
    }
}

//Create object
let p1 = Object.create(o);

//let p7 = Object.create(o, {name:{configurable:false}})
let p8 = Object.create(o, {name: {writable: false}, age: {value: 44}});

//Assign object
let o2 = {
    name: "someone",
    age: 10
}

let o3 = {
    fn: () => {
        console.log(this.name);
    }
}

let o4 = {
    street: "some street"
}

//Object.assign(o2, o3, o4);

let o5 = Object.assign({}, o2, o3, o4);

let o6 = {
    name: 'My name',
    fn: () => {
        console.log(this.name);
    }
}

let o7 = Object.assign({}, o2, o3, o4, o6);