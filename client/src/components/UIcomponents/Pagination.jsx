import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@material-ui/core';
import { FirstPage, LastPage } from '@material-ui/icons';

const Pagination = ({ total, limit, page, onChangePage, listCategory, maxNumPages, isFirstLastIcons }) => {
  
  let paginationItems = [];
  const totalItems =  Math.ceil(total /limit);
  const prevNextRang = parseInt(maxNumPages / 2,10);

  for (let num = page - prevNextRang ; num <= totalItems; num++ ) {
    if (num >= 1 && paginationItems.length < maxNumPages) {
      paginationItems.push(num);
    }
  }

  const isPagination = paginationItems.length > 1;


  const onChangePageByCategory = (pageNumber) => {
    onChangePage(listCategory, pageNumber);
  }

  if (isPagination) {
    return (
      <Grid justify="center" container>
        { 
          isFirstLastIcons && 
            <Button 
              size="small"
              variant="raised"
              disabled={ page === 1 }
              onClick={() => { onChangePageByCategory(1) }}
            >
              <FirstPage color="action" />
            </Button>
        }
        {
          paginationItems.map(item => (
            <Fragment key={item.toString()} >
              <Button 
                size="small"
                color={ page === item ? 'secondary' : 'primary' }
                variant="raised"
                onClick={() => { onChangePageByCategory(item) }}
              > 
                { item }
              </Button>
            </Fragment>
          ))
        }
        {
          isFirstLastIcons &&
            <Button 
              size="small"
              variant="raised"
              disabled={ page === totalItems }
              onClick={() => { onChangePageByCategory(totalItems) }}
            >
              <LastPage color="action" />
          </Button>
        }
      </Grid>
    )
  } else {
    return null;
  }
}

Pagination.defaultProps = {
  maxNumPages: 5,
  isFirstLastIcons: true
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  maxNumPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  isFirstLastIcons: PropTypes.bool.isRequired,
  listCategory: PropTypes.oneOf(['users', 'posts'])
}


export default Pagination;