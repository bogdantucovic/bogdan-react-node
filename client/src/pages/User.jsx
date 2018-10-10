import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  userSelector,
  usersFetchingSelector
} from "../selectors/usersSelectors";
import { usersFetchStartByUserId } from "../actions/usersActions";
import MetaData from "../components/MetaData/";
import LoaderHOC from "../HOC/Loader/";
import User from "../components/User/User";

const UserWithLoader = LoaderHOC(User);

class UserContainer extends React.Component {
  componentDidMount() {
    const { usersFetchStartByUserId, match } = this.props;
    const userid = match.params.userid;

    usersFetchStartByUserId(userid);
  }

  render() {
    const { user, currentUser, isFetching } = this.props;
    return (
      <React.Fragment>
        <MetaData />
        <UserWithLoader
          user={user}
          loader={{
            isLoading: isFetching
          }}
          currentUser={currentUser}
        />
      </React.Fragment>
    );
  }
}

UserContainer.proptypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string
  })
};

const mapStateToProps = state => ({
  currentUser: userSelector(state),
  isFetching: usersFetchingSelector(state)
});

const mapDispatchToProps = {
  usersFetchStartByUserId
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserContainer)
);
