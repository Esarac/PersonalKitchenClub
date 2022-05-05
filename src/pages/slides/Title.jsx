import React from 'react'
import Button from 'react-bootstrap/Button'
import logo from '../../assets/images/logo.png'

class Title extends React.Component {
    render(){
        return(
            <div className='container-table'>
                <div className='div-50 justify-content-center'>
                    <h1 className='text-white'>Personal Kitchen Club</h1>
                    <h3 className='text-white'>Trae el restaurante a tu casa</h3>
                    <Button variant="light" size='lg' className='col-5 rounded-pill' href="mailto:acosta57esteban@gmail.com">CONTÁCTANOS</Button>
                </div>
                <div className='div-50 bg-light justify-content-center'>
                    <img src={logo} className='logo' alt="logo" />
                </div>
            </div>
        );
    }
}

export default Title;