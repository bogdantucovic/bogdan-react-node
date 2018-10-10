import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

/**
 * 
 * 1. set language based on react-18next
 * 
 */
var MetaData = ({
  match: {url},
  title,
  description,
  children,
  i18n: {
    language // 1.
  },
  t
}) => {

  const metaDataNamespace = url.replace(/^\/+/, '');

  if (!title) {
    const defaultTitle = t('metaData.default.title');
    title = t(`metaData.${metaDataNamespace}.title`, defaultTitle);
  }

  if (!description) {
    const defaultDescription = t('metaData.default.description');
    description = t(`metaData.${metaDataNamespace}.description`, defaultDescription);
  }

  return(
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      { children }
    </Helmet>
  )
}

MetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default withRouter(translate()(MetaData));