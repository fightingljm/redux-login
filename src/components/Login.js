import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/login.js'
import store from '../store.js'

class Login extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit',this.refs.username.value);
    this.props.login(this.refs.username.value)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <p>
            Username:
            <input ref="username" type="username" />
          </p>
          <p>
            Password:
          <input type="password" />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
Login.propTypes = {
  login:React.PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  isAuthenticated:state
})
export default connect(mapStateToProps,{login})(Login);
