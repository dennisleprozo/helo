import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Router } from "react-router";

function Nav(props) {
  let displayNavOrNot =
    props.location.pathname === "/" ? (
      ""
    ) : (
      <div>
        <img src={props.profile_pic} alt="" />
        <p>{props.username}</p>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New Post</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    );

  console.log(props);
  return <div>{displayNavOrNot}</div>;
}

function mapStateToProps(state) {
  return {
    username: state.username,
    profile_pic: state.profile_pic
  };
}

export default Router(connect(mapStateToProps,
    null)(Nav)
);

