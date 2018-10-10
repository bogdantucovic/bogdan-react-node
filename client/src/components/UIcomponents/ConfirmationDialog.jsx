import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';  
  
import Transitions from '../utility/Transitions';

const ConfirmationDialog = ({
  t,
  tReady,
  contentText,
  transitionType,
  onConfirm,
  onClose,
  yes,
  no,
  ...dialogProps
}) => (
  <Dialog
    {...dialogProps}
    TransitionComponent={Transitions[transitionType]}
  >
    <DialogContent>
      <DialogContentText>
        { contentText } 
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button 
        onClick={() => { 
          onClose(); 
          onConfirm(); 
        }} 
        color="primary" >
        { yes || t('layout.yes') } 
      </Button>
      <Button onClick={onClose} color="secondary" >
        { no || t('layout.no') } 
      </Button>
    </DialogActions>
  </Dialog>
)

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  contentText: PropTypes.string.isRequired,
  yes: PropTypes.string,
  no: PropTypes.string
};

export default translate()(ConfirmationDialog);
