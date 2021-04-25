import React from "react";

const Blog = () => {
  return (
    <div className="blog">
      <div className="s-text">
        <div className="s-text2">
          <p>FROM OUR</p>
          <h3>LATEST BLOG</h3>
        </div>
      </div>
      <div className="blog-img">
        <div className="blog-single-img">
          <img src="./images/builder.jfif" alt="" className="blog-img2" />
          <div className="blog-text">
            <h3>Title</h3>
            <p>By admin / in map</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </div>
        </div>
        <div className="blog-single-img">
          <img src="./images/map.jfif" alt="" className="blog-img2" />
          <div className="blog-text">
            <h3>Title</h3>
            <p>By admin / in map</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
