import React from 'react';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}
