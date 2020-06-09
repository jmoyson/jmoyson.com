import React from "react";

import { FormattedMessage } from "react-intl";

const NotFound = () => {
  return (
    <div>
      <h1>
        <FormattedMessage id='notFound' />
      </h1>
      <p>
        <FormattedMessage id='notFoundMessage' />
      </p>
    </div>
  );
};

export default NotFound;
