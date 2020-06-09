import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import Link from "../components/Link";

const Tags = ({ group, title }) => {
  return (
    <section className='section'>
      <Helmet title={`Tags | ${title}`} />
      <div className='container content'>
        <div className='columns'>
          <div
            className='column is-10 is-offset-1'
            style={{ marginBottom: "6rem" }}
          >
            <h1 className='title is-size-2 is-bold-light'>
              <FormattedMessage id='tags' />
            </h1>
            <ul className='taglist'>
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Tags.propTypes = {
  group: PropTypes.array,
  title: PropTypes.string,
};

export default Tags;
