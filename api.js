function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => displayUsers(json));
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (json => console.log(json));
}
function displayUsers(json){
    const ul = document.getElementById('users');
    for(const user of json){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}