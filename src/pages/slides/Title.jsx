import React from 'react'
import Button from 'react-bootstrap/Button'
import ReactiveLogo from '../../components/reactiveLogo/ReactiveLogo'

class Title extends React.Component {
    render(){
        return(
            <div className='container-table'>
                <div className='div-50 justify-content-center'>
                    <h1 className='text-primary'>Personal Kitchen Club</h1>
                    <h3 className='text-secondary'>Trae el restaurante a tu casa</h3>
                    <Button variant="secondary" size='lg' className='col-8 rounded-pill text-light' href="mailto:acosta57esteban@gmail.com">CONTÁCTANOS</Button>
                </div>
                <div className='hide-on-portrait div-50 bgimg-logo justify-content-center'>
                    <ReactiveLogo/>
                </div>
            </div>
        );
    }
}

export default Title;