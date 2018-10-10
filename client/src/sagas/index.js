import { all } from 'redux-saga/effects';

import registrationWorker from './registration';
import loginWorker from './login';
import postsWorker from './posts';
import postCommentsWorker from './postComments';
import usersWorker from './users';
import uploadWorker from './upload';

export default function* root() {
  yield all([
    registrationWorker(),
    loginWorker(),
    postsWorker(),
    usersWorker(),
    uploadWorker(),
    postCommentsWorker()
  ])
}