// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var mainuser;
var container = document.querySelector('.container');

//Check is user Authenticated
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        mainuser = user;
        initApp();
    } else {
        // No user is signed in.
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
        });

        setContainerVisibility(false);
    }
});

function setContainerVisibility(status) {
    if (status) //set to visible
        container.setAttribute('class', 'container visible');
    else
        container.setAttribute('class', 'container');
}

function setUserDetails() {
    let userDetails = document.querySelector('.user-details');
    Array.from(userDetails.children).map((li, j) => {
        Array.from(li.children).map((span, i) => {
            if (j === 0 && i === 1)
                span.innerHTML = mainuser.email;
            else if (j === 1 && i === 1)
                span.innerHTML = mainuser.displayName;
        })
    })
}

function getFilesFromStorage() {
    let listRef = storage.ref('/');

    listRef.listAll().then(function(res) {
        res.prefixes.forEach(function(folder) {
            printFileOrDocument(folder, 'folder');
        });
        res.items.forEach(function(file) {
            printFileOrDocument(file, 'file');
        });
      }).catch(function(error) {
        // Uh-oh, an error occurred!
      });
}

function printFileOrDocument(ref, type)
{
    let fs = document.querySelector('.file-structure');
    let li = document.createElement('li');
    let span = document.createElement('span');
    
    span.setAttribute('class', `fa fa-${type}`);
    li.appendChild(span);
    span = document.createElement('span');

    let a = document.createElement('a');

    a.innerHTML = ref.name;
    span.appendChild(a);
    li.appendChild(span);

    fs.append(li);
}

function initApp() {
    setContainerVisibility(true);
    setUserDetails();
    getFilesFromStorage();
    console.log(mainuser);
}