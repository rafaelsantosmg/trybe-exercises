import React from 'react';
import './App.css';
import ListsTasks from './Components/ListsTasks';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ListsTasks />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
