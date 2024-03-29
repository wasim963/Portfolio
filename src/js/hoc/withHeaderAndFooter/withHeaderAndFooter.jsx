import React, { Fragment } from "react";
import { footer as FooterView } from "views/footer";
import { header as HeaderView } from "views/header";

export const withHeaderAndFooter = (Component, config = {}) => {
  const WithHeaderAndFooter = (props) => {
    return (
      <Fragment>
        {/* Header View */}
        <HeaderView />

        <div className="ui-app-view">
          <Component {...props} {...config} />
        </div>

        {/* Footer View */}
        <FooterView />
      </Fragment>
    );
  };

  // set display name
  WithHeaderAndFooter.displayName = "WithHeaderAndFooter";

  // set default props
  WithHeaderAndFooter.defaultProps = {};

  return WithHeaderAndFooter;
};
