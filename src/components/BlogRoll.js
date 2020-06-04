import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { FormattedMessage } from "react-intl";

class BlogRoll extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className='columns is-multiline'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column is-6' key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className='featured-thumbnail'>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className='post-meta'>
                    <Link
                      className='title has-text-primary is-size-4'
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className='subtitle is-size-5 is-block'>
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.frontmatter.description}
                  <br />
                  <br />
                  <Link className='button' to={post.fields.slug}>
                    <FormattedMessage id='readArticle' />
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  posts: PropTypes.array,
};

export default BlogRoll;
