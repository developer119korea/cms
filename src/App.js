import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Notice, NoticeWrite } from './pages';
import { Menu } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <Route exact path="/" component={Home} />
        <Route exact path="/notice" component={Notice}/>
        <Route path="/notice/write" component={NoticeWrite}/>
      </div>
    );
  }
}

export default App;