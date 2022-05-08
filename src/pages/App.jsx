import Title from './slides/Title';
// import Functionalities from './slides/Functionalities'
import Examples from './slides/Examples'
import Page from '../components/page/Page'

import ReactGa from 'react-ga'
import { useEffect } from 'react';

import {FaInstagram} from 'react-icons/fa'

function App() {
  useEffect(()=>{
    ReactGa.initialize('G-4X9Z8VGM86');

    //To report page view
    ReactGa.pageview('/')
  }, [])

  return (
    <>
        <Page theme='light' page={0}>
            <Title/>
        </Page>

        {/* <Page theme='primary' page={1}>
            <Functionalities/>
        </Page> */}

        <Page theme='light' page={2}>
            <Examples/>
        </Page>

        <div className='footer text-light'>
          <p className='text-center h1 display-1'>
            <a href='https://www.instagram.com/esaracgp/'>
              <FaInstagram className='text-light'/>
            </a>
          </p>
          <div className='d-flex justify-content-between'>
            <p><small>
              © 2022 Personal Kitchen Club. All Rights Reserved
            </small></p>
            <p><small>
              This website uses cookies in order to offer you the most relevant information.
            </small></p>
          </div>
        </div>
    </>
  );
}

export default App;
