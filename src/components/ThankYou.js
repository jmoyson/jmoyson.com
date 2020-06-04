import React from "react";

import { FormattedMessage } from "react-intl";

const ThankYou = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='content'>
          <h1>
            <FormattedMessage id='thankYou' />
          </h1>
          <p>
            <FormattedMessage id='thankYouMessage' />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
