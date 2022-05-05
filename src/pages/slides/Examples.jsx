import React from 'react'
import logo from '../../assets/images/logo.png';

class Examples extends React.Component {
    render(){
        var img_1 = require('../../assets/images/logo.png');

        return(
            <>
                <div className='row justify-content-center'>
                    {/* <div className='col d-flex justify-content-center'>
                        <img src={logo} className='example' alt="logo" />
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <img src={logo} className='example' alt="logo" />
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <img src={logo} className='example' alt="logo" />
                    </div> */}
                </div>
                
            </>
        );
    }
}

export default Examples;