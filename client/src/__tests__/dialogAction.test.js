import React from 'react';
import * as ACTION_TYPES from '../constants/dialogConstanst';
import * as dialogActions from '../actions/dialogActions';

describe('dialogActions', () => {
  it('resetDialog', () => {
    const expectedAction = {
      type: ACTION_TYPES.RESET_DIALOG
    }
    expect(dialogActions.resetDialog()).toEqual(expectedAction);
  });

  it('setDialog', () => {
    const payload = {
      isOpen: false,
      variant: 'success',
      contentText: 'Do you really want to unsubscribe?',
      confirmAction: 'logout',
      transitionType: 'zoom'
    }
    const expectedAction = {
      type: ACTION_TYPES.SET_DIALOG,
      payload
    }
    expect(dialogActions.setDialog(payload)).toEqual(expectedAction);
  });
});