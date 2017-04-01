import React from 'react';
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  componentWillMount(){
    console.log('componentWillMount',this.props.isAuthenticated);
  }
  render(){
    return(
      <div>
        {this.props.isAuthenticated ? `Welcome ${this.props.currentUser} !` : 'Please Login!'}
      </div>
    )
  }
}
Header.propTypes = {
  isAuthenticated:React.PropTypes.bool.isRequired,
  currentUser:React.PropTypes.string.isRequired
}
const mapStateToProps = (state) => ({
  isAuthenticated:state.isAuthenticated,
  currentUser:state.currentUser
})
export default connect(mapStateToProps)(Header);
