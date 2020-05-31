import React, { Component } from 'react';
import ProTypes from 'prop-types'
//Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
///data 
import items from '../data/menu'
class  App extends Component {
  static proTypes ={
     children :ProTypes.object.isRequired
  }
 render(){
   const {children} =this.props;
  return (
    <div className="App">
       <Header title="codejobs" items={items}/>
       <Content body={children}/>
       <Footer copyright="&copy :React 2020" />
    </div>
  );
 }
}

export default App;
