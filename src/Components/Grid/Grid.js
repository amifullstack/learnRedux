import React, { Component } from 'react';
import Photo from '../Photo/Photo'

class Grid extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      
      <div>
       {this.props.posts.map((post, i) => <Photo {...this.props} 
        key={i} i={i} post={post}/>)}
      </div>
      
    )
  }
}

export default Grid;