import React from 'react';
import EventTest from './event_test';

export default class SampleComponent extends React.Component {
  render() {
    return (
      <h1>Hi, I'm SampleComponent! <EventTest name="khanhpn" /></h1>
    );
  }
}
