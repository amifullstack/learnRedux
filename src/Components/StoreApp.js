import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../Actions/ActionCreator';
import HomePage from '../Components/Home/HomePage'
import Grid from '../Components/Grid/Grid'

function mapStateToProps(state) {
  return{
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const StoreApp = connect(mapStateToProps, mapDispatchToProps)(Grid);
export default StoreApp;
