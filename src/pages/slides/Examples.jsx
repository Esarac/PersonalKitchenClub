import React from 'react'
import FlipCard from '../../components/flipCard/FlipCard'

const flipCards=[
    {
        "image":
        <h1 className='text-light'>
            Perú
        </h1>,
        "description":
        <p className='w-100 text-center text-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
    },
    {
        "image":
        <h1 className='text-light'>
            Italia
        </h1>,
        "description":
        <p className='w-100 text-center text-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    },
    {
        "image":
        <h1 className='text-light'>
            Argentina
        </h1>,
        "description":
        <p className='w-100 text-center text-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    }
]

class Examples extends React.Component {
    render(){

        return(
            <>
                <FlipCard front={flipCards[0].image} frontClassName='bgimg-1' back={flipCards[0].description} backClassName='bg-secondary d-flex align-items-center'/>
                <FlipCard front={flipCards[1].image} frontClassName='bgimg-2' back={flipCards[1].description} backClassName='bg-secondary d-flex align-items-center'/>
                <FlipCard front={flipCards[2].image} frontClassName='bgimg-3' back={flipCards[2].description} backClassName='bg-secondary d-flex align-items-center'/>
            </>
        );
    }
}

export default Examples;