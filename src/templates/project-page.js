import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

export const ProjectPageTemplate = ({ projects }) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Projects gridItems={projects.blurbs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProjectPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        projects={frontmatter.projects}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
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
