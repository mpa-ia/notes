import React from 'react';
import Container from '../Container/Container';
import {infoContent} from '../../data/dataStore';

const Info = () => (

  <Container>
    <h2>{infoContent.title}</h2>
    <p>{infoContent.description}</p>
  </Container>
);
export default Info;