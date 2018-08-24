import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateUsername,
  updateUserId,
  updateProfilePic
} from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername(val) {
    this.setState({
      username: val
    });
  }

  handlePassword(val) {
    this.setState({
      password: val
    });
  }
//login post or update
  login = async function() {
    let { username, password } = this.state;

    let user = await axios.post(`/api/auth/login`, { username, password });
    let { updateUsername, updateUserId, updateProfilePic } = this.props;

    updateUsername(user.data.username);
    updateUserId(user.data.id);
    updateProfilePic(user.data.profile_pic);

    this.props.history.push("/dashboard");
  };

  register = async function() {
    let { username, password } = this.state;

    let user = await axios.post(`/api/auth/register`, { username, password });
    let { updateUsername, updateUserId, updateProfilePic } = this.props;

    updateUsername(user.data.username);
    updateUserId(user.data.id);
    updateProfilePic(user.data.profile_pic);

    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        Auth
        <h3>username</h3>
        <input
          value={this.state.username}
          onChange={e => this.handleUsername(e.target.value)}
          type="text"
        />
        <h3>password</h3>
        <input
          value={this.state.password}
          onChange={e => this.handlePassword(e.target.value)}
          type="text"
        />
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    );
  }
}

export default connect(
  null,
  { updateUsername, updateUserId, updateProfilePic }
)(Auth);
