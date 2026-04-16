let isLoading = false;
let posts;
let index=0;
let limit = 10;

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    posts = data;
    console.log(posts);
    loadPosts();
});

function loadPosts(){
    for(let i=index; i<index+limit; i++){
        if(i<posts.length){
            const post = posts[i];
            const Element = document.createElement('div');
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p class="post-title">${post.title}</p>
            `;
            const postcontent = document.createElement('div');
            postcontent.classList.add('post-content');
            postcontent.innerHTML = `
                <p>${post.body}</p>
            `;
            Element.appendChild(postElement);
            Element.appendChild(postcontent);
            document.getElementById('content').appendChild(Element);
        }
    }
    index += limit;
}


window.addEventListener('scroll', () => {
    handleScroll();
});


function handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 300) {
        loadMorePosts();
    }
}

function loadMorePosts() {
    if (isLoading) return;

    isLoading = true;

    setTimeout(() => {
        loadPosts();
        isLoading = false;
    }, 1000);
}