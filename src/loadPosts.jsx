import React from "react";

export const LoadPosts = () => {
  const [posts, setPosts] = React.useState({});

  console.log(posts);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='container'>
      {Object.values(posts).map((post) => (
          <div className="cart" key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
          </div>
      ))}
    </div>
  );
};
