import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import github from "../img/social/github.svg";

class Projects extends React.Component {
  render() {
    const { projects } = this.props;

    return (
      <div className='columns is-multiline'>
        {projects.map(({ node }) => {
          const frontmatter = node.frontmatter;
          return (
            <div key={node.id} className='column is-6'>
              <section className='section'>
                <div className='has-text-centered'>
                  <div
                    style={{
                      width: "240px",
                      height: "120px",
                      display: "inline-block",
                    }}
                  >
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: frontmatter.featuredimage,
                        alt: `featured image thumbnail for project ${frontmatter.name}`,
                      }}
                    />
                  </div>
                </div>

                <h3>{frontmatter.name}</h3>
                <p>{frontmatter.description}</p>
                <a
                  className='button'
                  href={frontmatter.sources}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='icon'>
                    <img src={github} alt='Github' />
                  </span>
                  <span>Sources</span>
                </a>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
};

export default Projects;
