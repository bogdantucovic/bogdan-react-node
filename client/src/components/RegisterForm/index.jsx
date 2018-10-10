import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { 
  TextField,
  Button,
  List,
  ListItem,
  Grid 
} from '@material-ui/core';

const RegisterForm = ({
  t,
  onChange,
  onSubmit,
  errors: {
    name: nameError,
    email: emailError,
    password: passwordError,
    global: globalError
  },
  name,
  email,
  password
}) => (
  <Grid justify="center" container >
    <form  onSubmit={onSubmit} autoComplete="off" noValidate >
      <List>
        <ListItem>
          <TextField
            label={t('layout.name')}
            name="name"
            type="text"
            onChange={onChange}
            value={name}
            error={nameError.length > 0 || globalError.length > 0 }
            autoFocus
            required
          />
        </ListItem>
        <ListItem>
          <TextField
            label={t('layout.email')}
            name="email"
            type="email"
            onChange={onChange}
            value={email}
            error={emailError.length > 0 || globalError.length > 0 }
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
            {t('layout.signup')}
          </Button>
        </ListItem>
        <ListItem>
        <Button 
          variant="text"
          color="primary"
          to='/login'
          component={Link} 
          >
          {t('registration.alreadyAccount')}
        </Button>
        </ListItem>
      </List>
    </form>
  </Grid>
)

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    global: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default translate()(RegisterForm);