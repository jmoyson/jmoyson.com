import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

const ProjectsIndexPage = ({ data, location }) => {
  const { edges: projects } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <div className='content'>
        <section className='section section--gradient'>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <Projects projects={projects} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectsIndexPage;

export const projectsPageQuery = graphql`
  query ProjectsQueryEn {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-details-page" }
          langKey: { eq: "en" }
        }
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
            name
            langKey
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredproject
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 256, quality: 100) {
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
