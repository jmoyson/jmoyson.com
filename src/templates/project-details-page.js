import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ProjectDetailsPageTemplate = ({ heading, description, intl }) => (
  <div className='content'>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <h1>{heading}</h1>
              <h2>{description}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ProjectDetailsPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
};

const ProjectDetailPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <ProjectDetailsPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

ProjectDetailPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProjectDetailPage;

export const projectDetailPageQuery = graphql`
  query ProjectDetailPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
      }
    }
  }
`;
