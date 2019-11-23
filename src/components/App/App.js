import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import {listData} from '../../data/dataStore';
// import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  state = {
    lists: listData || [],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <div className={styles.columns}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}
      </main>
    );
  }
}

export default App;
