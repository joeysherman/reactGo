import React from 'react';
import Page from '../pages/Page';
import AppContainer from '../containers/App';
import Navbar from '../components/navbar';
import { title, meta, link } from './assets';

const App = props => (
  <Page title={title} meta={meta} link={link}>
    <Navbar />
    <AppContainer {...props} />
  </Page>
);

export default App;
