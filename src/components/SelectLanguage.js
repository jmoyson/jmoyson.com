import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { flags } from "../data/languages";

const SelectLanguage = (props) => {
  const links = props.langs.map((lang) => (
    <Link to={lang.link} key={lang.langKey}>
      <li>{flags[lang.langKey]}</li>
    </Link>
  ));

  return <ul className='select-language navbar-item'>{links}</ul>;
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
