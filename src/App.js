import React from 'react'
import Header from './components/common/header';
import Main from './main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );

  }
};

export default App;