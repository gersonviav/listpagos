import React, { Component } from 'react';
import PropTypes  from 'prop-types'
//Assets
import '../components/styles/Footer.css'
import { render } from '@testing-library/react';

class   Footer extends Component {
    static propTypes = {
        copyright :PropTypes.string,
       
    }
  render(){
      const {copyright='&copy :React 2020'} =this.props;
    return (
        <div className="Footer">
            
                 <p dangerouslySetInnerHTML={{ __html: copyright }}/>
               
                
        
        </div>
    
       )
    
  }
 

}
export default Footer