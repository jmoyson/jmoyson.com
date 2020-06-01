import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import twitter from "../img/social/twitter.svg";
import github from "../img/social/github.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer has-background-black has-text-white-ter'>
        <div className='content has-text-centered'>
          <img
            src={logo}
            alt='Kaldi'
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className='content has-text-centered has-background-black has-text-white-ter'>
          <div className='container has-background-black has-text-white-ter'>
            <div style={{ maxWidth: "100vw" }} className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link to='/' className='navbar-item'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/about'>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/blog'>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <section>
                  <ul className='menu-list'>
                    <li>
                      <Link className='navbar-item' to='/projects'>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/contact'>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4 social'>
                <a
                  title='twitter'
                  href='https://twitter.com/jeremymoyson'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='fas fa-lg'
                    src={twitter}
                    alt='Twitter'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title='github'
                  href='http://github.com/jmoyson'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='fas fa-lg'
                    src={github}
                    alt='GitHub'
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
