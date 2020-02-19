/*
    Create an address book where you will have main address book
    as a class.

    In the address book you should have contacts saved. Contacts
    should be a new class (Contact) and represent an one contact.

    You should add a possibility for filtering the contacts by
    their first name or lastname or phone number, when searching into
    addressbook.

    When adding a new contact you should verify that name, lastname
    and phone are entered.

    Once when you have full address book you should call a save function
    that will save all contacts in localStorage.

    Once you do page refresh, you should get all contacts back from
    localStorage and assign them to the address book.

    Add new class for contact addresses where each contact can have
    multiple addresses, each address is an object in array, where
    contact can have array of objects with addresses.
    Each address should have (street, city, country, zipcode)

    Expand main address book class, where in search now we can look
    up contacts by street name.
*/

/*
    HomeWork 

    Create an ecommerce website.

    #1 Create UI part (html + css) where you will have a bar with
    search field which will be used to search (filter) the products
    by their name. Below the bar you should display 3 blocks in a row
    where each block will contain a product.

    #2 Each product should have an image, title, description, category
    and price. Products should be defined in one js object in JS file.

    #3 Each product should be of type Product (you will need Product class)
    where each product will belong to a category (Category class)

    #4 You will need store (Store class) where all products and categories
    will be put, and this class should have filter function that will
    return filtered set of products according the input into the search field.
    


*/



//Get item
JSON.parse(localStorage.getItem('IMETO_NA_ITEMOT'));

//Save item
localStorage.setItem('IMETO_NA_ITEMOT', JSON.stringify(itemot));