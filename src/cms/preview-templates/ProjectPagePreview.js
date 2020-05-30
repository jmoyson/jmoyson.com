import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPageTemplate } from '../../templates/project-page'

const ProjectPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'projects', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <ProjectPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      projects={{ blurbs }}
    />
  )
}

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProjectPagePreview
