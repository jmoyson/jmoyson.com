import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";
import { IntlProvider } from "react-intl";

import fr from "../../data/messages/fr";
import en from "../../data/messages/en";

const IndexPagePreview = ({ entry, getAsset }) => {
  const mainpitch = entry.getIn(["data", "mainpitch"]).toJS();

  const langKey = entry.getIn(["data", "langKey"]);
  const messages = { fr, en };
  if (mainpitch) {
    console.log(mainpitch);
    return (
      <IntlProvider locale={langKey} messages={messages[langKey]}>
        <IndexPageTemplate blogPosts={[]} projects={[]} mainpitch={mainpitch} />
      </IntlProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
