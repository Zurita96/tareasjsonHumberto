const posts = document.querySelector ("#posts")
const post = document.querySelectorAll (".post")
const countpost = document.querySelector ("#countpost") /*Los ID se llaman con #*/
const showpost = document.querySelector ("#showpost")

posts.style.display = "none"
countpost.innerHTML = post.length
showpost.addEventListener ("click", function (){
    posts.style.display = "grid"
})

fetch("https://jsonplaceholder.typicode.com/albums")
.then(response => response.json())
.then(json => {
    let template = ``
    json.forEach(element => {
        template+=`
        <div class="post">
            <h2>${element.userId}</h2>
            <h3>${element.id}</h3>
            <p>${element.title}</p>
        </div>`
        
    });
    posts.innerHTML = template
})