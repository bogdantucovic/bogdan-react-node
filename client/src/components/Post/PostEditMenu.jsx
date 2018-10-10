import React from 'react';
import { translate } from 'react-i18next';
import { MenuList, Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const PostEditMenu = ({
  t,
  onCloseMenu,
  open,
  onDeletePost,
  onEditPost,
  menuAnchorEl
}) => (
  <Menu
    open={open}
    onClose={onCloseMenu}
    anchorEl={menuAnchorEl}
    PaperProps={{
      style: {
        width: 250
      }
    }}
  >
    <MenuList>
      <MenuItem 
        onClick={() => {
          onCloseMenu();
          onDeletePost();
        }} 
      > 
        <ListItemIcon>
          <DeleteIcon/>  
        </ListItemIcon> 
        <ListItemText primary={t('post.menu.delete')} />
      </MenuItem>
      <MenuItem 
        onClick={() => {
          onCloseMenu();
          onEditPost();
        }} 
      > 
        <ListItemIcon>
          <EditIcon/>
        </ListItemIcon>
        <ListItemText primary={t('post.menu.edit')} />
      </MenuItem>
    </MenuList>
  </Menu>
)

export default translate()(PostEditMenu);
