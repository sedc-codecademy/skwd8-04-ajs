let libraryService = {
    currentId: 1,
    books: [],
    addBook: function(titleInput, isbnInput, authorInput, genreInput, yearInput, pagesInput){
        this.books.push({
            id: this.currentId,
            title: titleInput,
            isbn: isbnInput,
            author: authorInput,
            genre: genreInput,
            year: yearInput,
            pages: pagesInput
        });
        this.currentId++;
    },
    printBooks: function(element){
        for (let book of this.books) {
            element.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.isbn}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.year}</td>
                <td>${book.pages}</td>
            </tr>
            `
        }
    }
}

let uiService = {
    inputs: document.getElementById("inputs").children,
    addBtn: document.getElementById("addBtn"),
    result: document.getElementById("result"),
    message: document.getElementById("message"),
    validateInputs: function(){
        for (let input of this.inputs) {
            if(input.value === "" || input.value === 0 || input.value === null || input.value === undefined){
                return false;
            }
        }
        return true;
    },
    clearInputs: function(){
        for (let input of this.inputs) {
            input.value = "";
        }
    },
    insertBook: function(){
        if(!this.validateInputs()) {
            this.message.style.color = "red";
            this.message.innerText = "Please fill in all the fields with valid data!";
            return;
        };
        libraryService.addBook(this.inputs[0].value, this.inputs[1].value, this.inputs[2].value, this.inputs[3].value, this.inputs[4].value, this.inputs[5].value);
        this.message.style.color = "green";
        this.message.innerText = `${this.inputs[0].value} book was added!`;
        this.clearInputs();
        this.updateTable();
    },
    updateTable: function(){
        this.result.innerHTML = "";
        libraryService.printBooks(this.result);
    }
}

uiService.addBtn.addEventListener("click", function(event){
    // event.preventDefault();
    uiService.insertBook();
    // emailService.send();
    // logService.logData();
    // userService.validateUser();
});