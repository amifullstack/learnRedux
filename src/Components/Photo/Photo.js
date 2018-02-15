import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, i, comments } = this.props;
    return(
      <div>
        <figure>
          <div>
            <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} />
            <p>{post.caption}</p>
            </Link>
          </div>
        </figure>

      </div>
    )
  }
}

export default Photo;