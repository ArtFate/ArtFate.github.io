var posts=["posts/af5a8a6c8d.html","posts/af15175.html","posts/afe2bae1fb.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };