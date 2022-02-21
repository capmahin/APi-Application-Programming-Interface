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
    console.log(json)
}