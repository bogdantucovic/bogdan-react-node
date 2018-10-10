import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { 
  TextField, 
  Button,
  List,
  ListItem,
  Grid 
} from '@material-ui/core';

const LoginForm = ({
  t,
  onChange,
  onSubmit,
  errors: {
    password: passwordError,
    email: emailError,
    global: globalError
  },
  email,
  password
}) => (
  <Grid  justify="center" container >
    <form onSubmit={onSubmit}  autoComplete="off" noValidate >
      <List>
        <ListItem>
          <TextField
            label={t('layout.email')}
            name="email"
            onChange={onChange}
            value={email}
            type="email"
            error={emailError.length > 0 || globalError.length > 0 }
            autoFocus
            required
          />
        </ListItem>
        <ListItem>
          <TextField
            label={t('layout.password')}
            name="password"
            type="text"
            onChange={onChange}
            value={password}
            error={passwordError.length > 0 || globalError.length > 0 }
            required
          />
        </ListItem>
        <ListItem>
          <Button 
            onClick={onSubmit}
            variant="raised" 
            color="primary"
          >
            {t('layout.signin')}
          </Button>
        </ListItem>
      </List>
    </form>
  </Grid>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    global: PropTypes.string.isRequired
  }),
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default translate()(LoginForm);