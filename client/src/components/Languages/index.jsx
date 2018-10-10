import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Button from '@material-ui/core/Button';
import { availLanguages } from '../../config';

const Languages = ({ i18n, languages }) => (
  <div> 
  {
    languages.map((lang, key) => (
      <Fragment key={key.toString()} >
        <Button 
          size="small" 
          onClick={() => {i18n.changeLanguage(lang)}}
          color={i18n.language === lang ? 'secondary' : 'primary' } 
        > 
          {lang} 
        </Button>
      </Fragment>
    ))
  }
  </div>
)

Languages.defaultProps = {
  languages: availLanguages
}

Languages.propTypes = {
  languages: PropTypes.array.isRequired
}

export default translate()(Languages);