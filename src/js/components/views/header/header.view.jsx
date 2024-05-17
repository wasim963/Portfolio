import React from "react";
import { NavLink } from "react-router-dom";

// local dependencies
import { Icon } from '@modules/icon-bank';

export const header = ( props ) => {
  const { navigations, handleClick, theme, toggleTheme } = props;

  return (
    <header className="ui-header">
      <div className="ui-header__container">
        <div className="ui-header__container__logo">
          <div className="ui-header__container__logo--icon">
              <NavLink to={'/'} >Wasim</NavLink>
            </div>
        </div>
        <nav className="ui-header__container__wrapper">
          <ul className="ui-header__container__wrapper__nav">
            {
              Array.isArray( navigations ) && navigations.map( navigation => {
                return(
                  <li key={navigation?.name} className="ui-header__container__wrapper__nav__link">
                    <NavLink
                      to={navigation?.path}
                      className={({ isActive }) => 
                        isActive ? 'ui-header__container__wrapper__nav__link--active': ''
                      }
                    >
                      {navigation.title}
                    </NavLink>
                  </li>
                )
              })
            }
            <li
              className="ui-header__container__wrapper__nav__link"
              onClick={toggleTheme}
              tabIndex={0}
            >
              <Icon
                name={theme === 'light' ? 'sun' : 'moon'}
                width={28}
                height={28}
                fill={'#e5e5e5'}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// set display name
header.displayName = 'HeaderView';

// set default props
header.defaultProps = {
  navigations: [],
  theme: 'light',
  handleClick: () => {}
};