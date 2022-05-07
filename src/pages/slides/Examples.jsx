import React from 'react'
import FlipCard from '../../components/flipCard/FlipCard'

const flipCards=[
    {
        "image":
        <h2 className='text-truncate text-logo'>
            México
        </h2>,
        "description":
        <p className='w-100 text-center text-light'>
            “Reuniones como esta hay que repetirlas. Todos mis sobrinos estaban felices con la piñata y los sombreros.”
            <br/>
            ~Sebastian Ariza
        </p>
        
    },
    {
        "image":
        <h2 className='text-truncate text-logo'>
            Brasil
        </h2>,
        "description":
        <p className='w-100 text-center text-light'>
            “La comida y el servicio estuvieron espectaculares. Definitivamente el mejor cumpleaños que he tenido.”
            <br/>
            ~Eduardo Giraldo
        </p>
    },
    {
        "image":
        <h2 className='text-truncate text-logo'>
            Irlanda
        </h2>,
        "description":
        <p className='w-100 text-center text-light'>
            “Organizando eventos empresariales son unos genios y para la comida unos artistas”
            <br/>
            ~Carlos Cadena
        </p>
    }
]

class Examples extends React.Component {
    render(){

        return(
            <>
                <FlipCard front={flipCards[0].image} frontClassName='bgimg-1 border border-success rounded' back={flipCards[0].description} backClassName='bg-secondary d-flex align-items-center border border-success rounded'/>
                <FlipCard front={flipCards[1].image} frontClassName='bgimg-2 border border-success rounded' back={flipCards[1].description} backClassName='bg-secondary d-flex align-items-center border border-success rounded'/>
                <FlipCard front={flipCards[2].image} frontClassName='bgimg-3 border border-success rounded' back={flipCards[2].description} backClassName='bg-secondary d-flex align-items-center border border-success rounded'/>
            </>
        );
    }
}

export default Examples;