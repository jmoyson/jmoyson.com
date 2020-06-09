import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Link from "../components/Link";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import BlogRoll from "../components/BlogRoll";

import "intl";
import { FormattedMessage } from "react-intl";

export const IndexPageTemplate = ({ mainpitch, projects, blogPosts }) => {
  return (
    <div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div className='content'>
                    <div className='tile'>
                      <h1 className='has-text-weight-semibold is-size-2'>
                        {mainpitch.title}
                      </h1>
                    </div>
                    <div className='tile'>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: mainpitch.description,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className='columns'>
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/about'>
                        <FormattedMessage id='learnMoreAboutMe' />
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className='column is-12'>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      <FormattedMessage id='latestArticles' />
                    </h3>
                    <BlogRoll posts={blogPosts} count={blogPosts.length} />
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/blog'>
                        <FormattedMessage id='readMoreArticles' />
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className='columns'>
                    <div className='column is-12'>
                      <h3 className='has-text-weight-semibold is-size-2'>
                        <FormattedMessage id='projects' />
                      </h3>
                    </div>
                  </div>
                  <Projects projects={projects} />
                  <div className='columns'>
                    <div className='column is-12 has-text-centered'>
                      <Link className='btn' to='/projects'>
                        <FormattedMessage id='seeAllMyProjects' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  blogPosts: PropTypes.array,
  projects: PropTypes.array,
  mainpitch: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

const IndexPage = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark;

  const blogPosts = edges.filter(
    ({ node }) => node.frontmatter.templateKey === "blog-post"
  );

  const projects = edges.filter(
    ({ node }) => node.frontmatter.templateKey === "project-details-page"
  );

  const indexContent = edges.find(
    ({ node }) => node.frontmatter.templateKey === "index-page"
  );

  const mainpitch = indexContent.node.frontmatter.mainpitch;
  return (
    <Layout location={location}>
      <IndexPageTemplate
        blogPosts={blogPosts}
        projects={projects}
        mainpitch={mainpitch}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($langKey: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { langKey: { eq: $langKey } } }
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
            mainpitch {
              description
              title
            }
            date(formatString: "MMMM DD, YYYY")
            featuredproject
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
