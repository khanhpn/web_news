import React from 'react';
import EventTest from './event_test';
import App from './app';
import FormTut from './FormTut';
import demo from './demo';

export default class SampleComponent extends React.Component {
  render() {
    return (
      <h1>
        Hi, I'm SampleComponent! <EventTest name="khanhpn" />
        <App />
        <FormTut />
      </h1>
    );
  }
}
