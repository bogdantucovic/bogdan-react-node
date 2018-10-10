import * as React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { 
  Button, 
  Menu, 
  MenuList, 
  MenuItem, 
  Select, 
  FormControl, 
  Input, 
  InputLabel,
  FormControlLabel,
  Checkbox 
} from '@material-ui/core';
import { Person, FavoriteBorder, Favorite } from '@material-ui/icons';
import { availThemes } from '../../config';
import { setTheme } from '../../actions/commonActions';
import { setPostImageView } from '../../actions/postActions';
import { currentThemeSelector } from '../../selectors/themeSelectors';
import { hasImagesSelector } from '../../selectors/postsSelectors';

class UserMenu extends React.Component {
  state = {
    menuAnchorEl: null
  }

  setMenuAnchorEl = (e) => {
    this.setState({ menuAnchorEl: e.target });
  }

  handleClose = () => {
    this.setState({ menuAnchorEl: null });
  }

  handleChangeTheme = (e) => {
    const newTheme = e.target.value;
    
    this.props.setTheme(newTheme);
  }

  handleChangePostView = (e) => {
    this.props.setPostImageView(e.target.checked);
  }

  render() {
    const { menuAnchorEl, open } = this.state;
    const { setDialog, t, user, history, currentTheme, hasImagesOnly, match: { url }  } = this.props;
    const isChangeToImageView = url.startsWith('/posts') || url.startsWith('/users/');

    return(
      <React.Fragment>
        <Button
          variant="raised"
          size="small"
          color="primary"
          onClick={this.setMenuAnchorEl}
        >
          <Person/>
        </Button>
        <Menu
          open={Boolean(menuAnchorEl)}
          onClose={this.handleClose}
          anchorEl={menuAnchorEl}
          PaperProps={{
            style: {
              width: 200
            }
          }}
        >
          <MenuList>
            <MenuItem 
              onClick={() => { 
                history.push(`/users/${user.id}`);
                this.handleClose(); 
              }}
            >
              { user.name } 
            </MenuItem>
            <MenuItem>
              <FormControl>
                <InputLabel htmlFor="theme">{ t('user.menu.themes') }</InputLabel>
                <Select
                  style={{minWidth: '180px'}}
                  value={currentTheme}
                  onChange={this.handleChangeTheme}
                  input={<Input id="theme" />}
                  >
                    {
                      availThemes.map((theme, key) => (
                        <MenuItem value={theme} key={key} >
                          { theme }
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
            </MenuItem>
            {
              isChangeToImageView &&
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        icon={<FavoriteBorder />} 
                        checkedIcon={<Favorite />} 
                        checked={hasImagesOnly}
                        onChange={this.handleChangePostView}
                      />
                    }
                    label={ t('user.menu.toGalleryView') }
                  />
                </MenuItem>
            }
            <MenuItem
              onClick={() => {
                this.handleClose();
                setDialog({
                  isOpen: true,
                  variant: 'error',
                  confirmAction: 'logout',
                  contentText: t('logout.confirmQuestion')
                })
              }} 
            > 
              { t('user.menu.logout') }
            </MenuItem>
          </MenuList>
        </Menu>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTheme: currentThemeSelector(state),
  hasImagesOnly: hasImagesSelector(state)
});

export default withRouter(
  connect(mapStateToProps, {setTheme, setPostImageView})
  (translate()(UserMenu))
);