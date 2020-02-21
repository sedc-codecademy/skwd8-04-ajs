class UsersMap
{
    constructor({uid, name, email})
    {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.active = false;
        this.modified = false;
    }

    setUserActive(status)
    {
        this.active = status;
        this.modified = true;
    }
}

function getUsers()
{
    fetch('http://localhost:3000/users')
    .then((users) => {
        return users.json();
    })
    .then((users) => {
        printUsers(users);
    })
    .catch((e)=>{
        console.log(e)
    })
}

function printUsers(users)
{
    let mappedUsers = users.map((user) => {
        return new UsersMap(user);
    });
    
    let ul = document.querySelector('.usersList > ul');
    mappedUsers.map((user) => {
        let li = document.createElement('li');
        li.innerHTML = user.email;
        ul.appendChild(li);
    })
}

getUsers();

let form = document.querySelector('.userForm > form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = {
        name: e.target.elements.username.value,
        email: e.target.elements.email.value
    }
    
    fetch('http://localhost:3000/users', 
        {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }
    ).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}, false);