import React, { Component } from 'react';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
        <MuiThemeProvider>
          <section className="cat-search">
            <div className="container-fluid">
                <div className="row">
                    <Search />
                </div>
            </div>
          </section>
        </MuiThemeProvider>
      );
  }
}
 
export default App;

