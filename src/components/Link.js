import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { useIntl } from "react-intl";
import { addLangKeyToSlug } from "ptz-i18n";

const Link = ({ to, language, children, onClick, ...rest }) => {
  const intl = useIntl();
  const langKey = language || intl.locale;
  const urlForLang = addLangKeyToSlug(to, langKey, {
    langKeyDefault: intl.defaultLocale,
    prefixDefault: false,
  });

  return (
    <GatsbyLink {...rest} to={urlForLang}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  language: PropTypes.string,
};

Link.defaultProps = {
  to: "",
};

export default Link;
