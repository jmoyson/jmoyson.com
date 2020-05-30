import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Projects from '../components/Projects'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({ mainpitch, projects }) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="has-text-weight-semibold is-size-2">
                      {mainpitch.title}
                    </h1>
                  </div>
                  <div className="tile">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: mainpitch.description,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="button" to="/about">
                      Learn more About me
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest articles
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Projects
                    </h3>
                  </div>
                </div>
                <Projects gridItems={projects.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/projects">
                      See all my projects
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
)

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  projects: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        projects={frontmatter.projects}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
        }
        projects {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            demo
            name
            sources
          }
        }
      }
    }
  }
`
