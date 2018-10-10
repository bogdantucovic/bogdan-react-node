import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import './index.scss';

import { uploadDeleteRequest } from '../../actions/uploadActions';

const ImageUpload = ({ 
  fileName, 
  resource,
  onChangeFile, 
  uploadAction,
  uploadDeleteRequest 
}) => (
  <Fragment>
    {
      fileName &&
        <div className="file-upload" >
          <Button 
            variant="raised"
            color="secondary"
            size="small"
            onClick={()=> { uploadDeleteRequest({fileName} , resource, uploadAction) }}
          > 
            <DeleteIcon/>
          </Button>
          <img 
            alt={fileName}
            src={`/assets/imgs/${fileName}`} 
          />
        </div>
    }
      <div className="file-upload__input">
        <Button
          variant="outlined"
          color="primary"
        >
          <InsertPhoto/>
        </Button>
        <input
          type="file"
          name="file"
          accept="image/png, image/jpeg" 
          onChange={onChangeFile}
        />
      </div>
  </Fragment>
)

ImageUpload.propTypes = {
  uploadDeleteRequest: PropTypes.func.isRequired,
  onChangeFile: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired,
  resource: PropTypes.oneOf(['posts']),
  uploadAction: PropTypes.oneOf(['update', 'create'])
}

export default connect(
  null,
  { uploadDeleteRequest }
)(ImageUpload);




