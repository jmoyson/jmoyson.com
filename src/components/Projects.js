import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import github from "../img/social/github.svg";

const ProjectGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map((item) => (
      <div key={item.name} className='column is-6'>
        <section className='section'>
          <div className='has-text-centered'>
            <div
              style={{
                width: "240px",
                height: "120px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>

          <h3>{item.name}</h3>
          <p>{item.text}</p>
          <a
            className='button'
            href={item.sources}
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
    ))}
  </div>
);

ProjectGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      text: PropTypes.string,
      sources: PropTypes.string,
      demo: PropTypes.string,
    })
  ),
};

export default ProjectGrid;
