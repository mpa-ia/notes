import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container.js';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';

class Header extends React.Component {
    static propTypes = {
      to: PropTypes.string,
    }
    render () {

      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link className={styles.logo} to='/'>
                <Icon name="bullseye"/>
              </Link>
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/info' activeClassName='active'>Info</NavLink>   
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}
export default Header;