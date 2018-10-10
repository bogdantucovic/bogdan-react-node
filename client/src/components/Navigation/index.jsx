import React, { Fragment } from "react";
import { translate } from "react-i18next";
import capitalize from "lodash/capitalize";

import NavLinkWithStyle from "./NavLinkWithStyle";

const Navigation = ({ t, isAuthenticated, onToggleMenu }) => {
  const getLink = name => capitalize(t(`navLinks.${name}`));

  if (isAuthenticated) {
    return (
      <Fragment>
        {/* 
            define content of Home component and remove this comment
          <NavLinkWithStyle exact 
            to="/" 
            onClick={onToggleMenu} 
          > 
            { getLink('home') }
          </NavLinkWithStyle>
          */}
        <NavLinkWithStyle exact to="/posts" onClick={onToggleMenu}>
          {getLink("posts")}
        </NavLinkWithStyle>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <NavLinkWithStyle to="/signup" onClick={onToggleMenu}>
          {getLink("signup")}
        </NavLinkWithStyle>
        <NavLinkWithStyle to="/login" onClick={onToggleMenu}>
          {getLink("signin")}
        </NavLinkWithStyle>
      </Fragment>
    );
  }
};

export default translate()(Navigation);
