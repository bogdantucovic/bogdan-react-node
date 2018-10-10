import { combineReducers } from 'redux';
import auth from './authReducer';
import login from './loginReducer';
import registration from './registrationReducer';
import notification from './notificationReducer';
import dialog from './dialogReducer';
import posts from './postsReducer';
import users from './usersReducer';
import postComments from './postCommentsReducer';
import theme from './themeReducer';


export default combineReducers({
  auth,
  posts,
  postComments,
  users,
  dialog,
  notification,
  login,
  registration,
  theme
})