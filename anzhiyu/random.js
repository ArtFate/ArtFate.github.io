var posts=["posts/af15175.html","posts/afe2bae1fb.html","posts/af5a8a6c8d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };