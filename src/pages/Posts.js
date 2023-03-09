import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.scss";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .then(setLoader(false));
  }
  return (
    <div className="posts">
      <div className="posts__container">
        <div className="posts__content">
          <div className="posts__title">
            <h1 to="/" className="posts__title">
              Posts
            </h1>
          </div>
          <div className="posts__link">
            <nav className="posts__nav">
              <ol className="posts__box-link">
                <li className="posts__items">
                  <Link to="/">Home</Link>
                </li>
                <li className="posts__items">/</li>
                <li className="posts__items_active">Posts</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="posts__box-content">
        <div className="posts__box">
          {loader ? (
            <div className="posts__container-content">Loading...</div>
          ) : (
            <div className="posts__posts-container">
              {posts.slice(0, 10).map((post) => {
                return (
                  <div className="posts__post" key={post.id}>
                    <div className="posts__card">
                      <div className="posts__card-box">
                        <h5 className="posts__card-title">{post.title}</h5>
                        <p className="posts__description">{post.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
