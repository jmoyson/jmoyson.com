import React from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";

import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { IntlProvider } from "react-intl";

import fr from "../data/messages/fr";
import en from "../data/messages/en";

const TemplateWrapper = ({ children, location }) => {
  const messages = { fr, en };

  const {
    title,
    description,
    languages: { defaultLangKey, langs },
  } = useSiteMetadata();

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/");
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
    (item) => ({
      ...item,
      link: item.link.replace(`/${defaultLangKey}/`, "/"),
    })
  );

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <div>
        <Helmet>
          <html lang={langKey} />
          <title>{title}</title>
          <meta name='description' content={description} />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel='icon'
            type='image/png'
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes='32x32'
          />
          <link
            rel='icon'
            type='image/png'
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes='16x16'
          />

          <link
            rel='mask-icon'
            href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
            color='#ff4400'
          />
          <meta name='theme-color' content='#fff' />

          <meta property='og:type' content='business.business' />
          <meta property='og:title' content={title} />
          <meta property='og:url' content='/' />
          <meta
            property='og:image'
            content={`${withPrefix("/")}img/logo.jpg`}
          />
        </Helmet>
        <Navbar langs={langsMenu} />

        <div>{children}</div>
        <CookieConsent
          location='bottom'
          enableDeclineButton
          cookieName='gatsby-gdpr-google-analytics'
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>

        <Footer />
      </div>
    </IntlProvider>
  );
};

export default TemplateWrapper;
