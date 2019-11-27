import React from 'react';
import Container from '../Container/Container';
import {infoContent, settings } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';

const Info = () => (

  <Container>
    <Hero titleText={infoContent.title} pictureSrc={settings.defaultHeroImage} />
    <p>{infoContent.description}</p>
  </Container>
);
export default Info;