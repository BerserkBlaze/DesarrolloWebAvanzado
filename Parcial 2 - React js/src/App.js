import React, { Component } from 'react';
import './App.css';
import GaleriaDeImagenes from "./containers/GaleriaDeImagenes";
import { RContextProvider } from './context/RContext'
import Seccionhome from './containers/SeccionHome'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
        <Seccionhome></Seccionhome>
      <RContextProvider>
        <GaleriaDeImagenes>
        </GaleriaDeImagenes>
      </RContextProvider>
        </div>
      </React.Fragment>
      )
  }
}

export default App;
