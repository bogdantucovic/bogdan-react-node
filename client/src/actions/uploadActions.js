import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
  UPLOAD_DELETE_REQUEST,
  UPLOAD_DELETE_SUCCESS,
  UPLOAD_DELETE_FAILURE
} from '../constants/uploadConstants';

export const uploadRequest = (body, resource, action) => ({
  type: UPLOAD_REQUEST,
  endpoint: '/api/upload',
  fetchOptions: {
    method: 'POST',
    body
  },
  resource,
  action
});

export const uploadSuccess = (fileName, resource, action) => ({
  type: UPLOAD_SUCCESS,
  fileName,
  resource,
  action
});

export const uploadDeleteRequest = (body, resource, action) => {
  body = JSON.stringify(body);
  
  return ({
    type: UPLOAD_DELETE_REQUEST,
    endpoint: '/api/upload',
    fetchOptions: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    },
    resource,
    action
  })
}


export const uploadDeleteSuccess = (resource, action) => ({
  type: UPLOAD_DELETE_SUCCESS,
  resource,
  action
});

