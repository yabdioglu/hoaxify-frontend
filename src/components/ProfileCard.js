import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Authentication } from '../shared/AuthenticationContext';

function ProfileCard(props) {
  const pathUsername = props.match.params.username;
  let message = "We cannot edit";
  if (pathUsername === props.loggedInUsername) {
    message = "We can edit";
  }
  return (
    <div>{message}</div>
  )
};

// class ProfileCardContextWrapper extends Component {
//   // static contextType = Authentication;
//   render() {
//     return (
//       <div>
//         <ProfileCard {...this.props} username={this.context.state.username} />
//       </div>
//     )
//   }
// }

const mapStateToProps = store => {
  return {
    loggedInUsername: store.username
  };
};


export default connect(mapStateToProps)(withRouter(ProfileCard));
