import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    lists: listData || [],
  }
  addList(title, description, image) {
    this.setState(state => (
      {
        lists: [
          ...state.lists, 
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: description || settings.defaultListDescription,
            image: image || settings.defaultHeroImage,
            columns: [],
          },
        ],
      }
    ));
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div className={styles.columns}>
          {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    );
  }
}

export default App;
