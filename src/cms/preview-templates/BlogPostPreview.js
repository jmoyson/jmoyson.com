import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";
import { IntlProvider } from "react-intl";

import fr from "../../data/messages/fr";
import en from "../../data/messages/en";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  const langKey = entry.getIn(["data", "langKey"]);
  const messages = { fr, en };

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <BlogPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={tags && tags.toJS()}
        title={entry.getIn(["data", "title"])}
      />
    </IntlProvider>
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
