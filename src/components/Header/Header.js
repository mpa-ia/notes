import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
    static propTypes = {
      icon: PropTypes.string,
      to: PropTypes.string,
    }

    render () {
      const { home, info, faq, active } = settings.header.links;
      return (
        <header className={styles.component}>
          <Container>

            <div className={styles.wrapper}>
              <Link className={styles.logo} to={home.path}>
                <Icon name={settings.header.icon}/>
              </Link>
              <nav>
                <NavLink exact to={home.path} activeClassName={active}>{home.title}</NavLink>
                <NavLink exact to={info.path} activeClassName={active}>{info.title}</NavLink>
                <NavLink exact to={faq.path} activeClassName={active}>{faq.title}</NavLink>
              </nav>
            </div>
            <Search />
          </Container>
        </header>
      );
    }
}
export default Header;