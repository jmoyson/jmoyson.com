import React from "react";
import Link from "./Link";
import logo from "../img/logo.svg";
import github from "../img/social/github.svg";
import twitter from "../img/social/twitter.svg";
import SelectLanguage from "./SelectLanguage";
import { FormattedMessage } from "react-intl";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      langs: props.langs,
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Home'>
              <img
                src={logo}
                alt='jmoyson.com logo'
                style={{ height: "3rem", maxHeight: "3rem" }}
              />
            </Link>

            <SelectLanguage langs={this.state.langs} />

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              role='button'
              tabIndex='0'
              onClick={this.toggleHamburger}
              onKeyDown={this.toggleHamburger}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-end has-text-centered'>
              <Link className='navbar-item' to='/'>
                <FormattedMessage id='home' />
              </Link>
              <Link className='navbar-item' to='/about'>
                <FormattedMessage id='about' />
              </Link>
              <Link className='navbar-item' to='/blog'>
                <FormattedMessage id='blog' />
              </Link>
              <Link className='navbar-item' to='/projects'>
                <FormattedMessage id='projects' />
              </Link>
              <Link className='navbar-item' to='/contact'>
                <FormattedMessage id='contact' />
              </Link>
              <a
                className='navbar-item'
                href='http://github.com/jmoyson'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon'>
                  <img src={github} alt='Github' />
                </span>
              </a>
              <a
                className='navbar-item'
                href='https://twitter.com/jeremymoyson'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon'>
                  <img src={twitter} alt='Twitter' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
