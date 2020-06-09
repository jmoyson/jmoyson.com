import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const BlogIndexPage = ({ data, count, location }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <section className='section'>
        <div className='container'>
          <div className='content'>
            <BlogRoll posts={posts} count={count} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;

export const blogPageQuery = graphql`
  query BlogQueryEn {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" }, langKey: { eq: "en" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            description
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
