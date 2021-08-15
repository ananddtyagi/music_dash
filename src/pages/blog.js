import React from "react";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  const posts = data.allFile.nodes;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog_posts" } }) {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`;
export default Blog;
