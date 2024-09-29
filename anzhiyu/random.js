var posts=["posts/afe2bae1fb.html","posts/af5a8a6c8d.html","posts/af87c0ee8.html","posts/af15175.html","posts/af6cedd270.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };