import React from 'react';
import Container from '../Container/Container';
import {faqContent, settings } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';
import styles from './FAQ.scss';

const FAQ = () => (

  <Container>
    <Hero titleText={faqContent.title} pictureSrc={settings.defaultHeroImage} />
    <p>{faqContent.description}</p>
    {Object.keys(faqContent.qa).map(item => {
      return (        
        <article className={styles.article} key={item}>
          <p className={styles.question}>{faqContent.qa[item].question}</p>
          <p className={styles.answer}>{faqContent.qa[item].answer}</p>
        </article> 
      ); 
    })}
  </Container>
);
export default FAQ;