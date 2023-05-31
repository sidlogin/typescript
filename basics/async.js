const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post One', body: 'This is post Two'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Somthing went wrong!')
      }
    }, 2000);
  });
}

/* 
  Async Await example 
*/

async function init() {
  await createPost({title: 'Post Three', body: 'This is post Three'});
  getPosts();
}

init();

/* 
  Async Await Fetch example 
*/

async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    console.log(data);
  }
  catch (e) {
    console.log(e)
  }
}

fetchUsers();