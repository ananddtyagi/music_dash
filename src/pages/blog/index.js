import React from "react";
import { graphql, Link } from "gatsby";

const Blog = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <div>
      <ul>
        {nodes.map((node) => (
          <li>
            <Link to={`/blog/${node.slug}`}>{node.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC] }
    ) {
      nodes {
        slug
      }
    }
  }
`;

export default Blog;
