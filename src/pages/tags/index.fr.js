import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Tags from "../../components/Tags";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <Tags title={title} group={group} />
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQueryFr {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { langKey: { eq: "fr" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
