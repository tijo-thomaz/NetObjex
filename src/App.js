import React,{Component} from 'react';
import Content from './components/Content'
import WindowDimensionsProvider from './components/Dimensions/windowDiamensionProvider'
import SFTEXT from './assets/fonts/SF-UI-Text-Regular.woff'
import POPPINS from './assets/fonts/Poppins-Regular.ttf'
import {Provider} from 'react-redux';
import store from './store';
import { createGlobalStyle } from 'styled-components'

 const GlobalStyle = createGlobalStyle`  
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
  
    }
  body {
    font-family: 'SF Text';
  }
  @font-face {
font-family: "SF Text";
src: url(${SFTEXT});
}
@font-face {
font-family: "Poppins";
src: url(${POPPINS});
}
`
class App extends Component {
  render() {
    return (
      <WindowDimensionsProvider>
         <GlobalStyle />
         <Provider store={store}>
         <Content />
         </Provider>
    
    </WindowDimensionsProvider>
    );
  }
}

export default App;

