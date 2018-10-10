import React from "react";
import { withRouter } from "react-router";

const ListHOC = ListPresentation => {
  class ListParent extends React.Component {
    componentDidMount() {
      this.getItems(1);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      const { page, match, total, limit } = this.props;

      if (prevProps.match !== match) {
        this.getItems(page, match.params.userid);
      }

      if (prevProps.page !== page) {
        this.getItems(page);
      }

      if (prevProps.total !== total) {
        const newPage = (page - 1) * limit >= total ? page - 1 : page;
        this.getItems(newPage);
      }
    }

    getItems(page, userId = this.props.match.params.userid) {
      const { fetchStart, limit } = this.props;

      fetchStart(page, limit, userId);
    }

    render() {
      const { fetchStart, ...presentationProps } = this.props;
      return <ListPresentation {...presentationProps} />;
    }
  }

  return withRouter(ListParent);
};

export default ListHOC;
