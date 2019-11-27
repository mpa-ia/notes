import React from 'react';
import Container from '../Container/Container';
import {faqContent, settings } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';

const FAQ = () => (

  <Container>
    <Hero titleText={faqContent.title} pictureSrc={settings.defaultHeroImage} />
    <p>{faqContent.description}</p>
  </Container>
);
export default FAQ;