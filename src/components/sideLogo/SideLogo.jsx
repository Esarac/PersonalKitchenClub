import React from 'react'
import './SideLogo.css';
import logo from '../../assets/images/logo.svg';

class SideLogo extends React.Component {
    render(){
        return(
            <div class='pane'>
                <img src={logo} className="logo bottom-right" alt="logo" />
            </div>
        );
    }
}

export default SideLogo;