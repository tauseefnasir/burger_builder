import React ,{Component}from 'react';
// import './App.css';
// import { render } from '@testing-library/react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Layout from './components/Layout/Layout.js'

class  App extends Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder/>
        </Layout>
      
      </div>
    );
  }
  
}

export default App;
