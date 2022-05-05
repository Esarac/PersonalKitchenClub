import { Parallax, ParallaxLayer} from '@react-spring/parallax'

import Title from './slides/Title';
import Subtitle from './slides/Subtitle'
import About from './slides/About'
import Examples from './slides/Examples'
import Contact from './slides/Contact'

function App() {
  // const actualSlide = slides[index]

  return (
    <div>
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
        {/*Page 0*/}
        <ParallaxLayer
          offset={0}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title />
        </ParallaxLayer>
        
        {/*Page 1*/}
        <ParallaxLayer
          offset={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Subtitle />
        </ParallaxLayer>

        {/*Page 2*/}
        <ParallaxLayer
          offset={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <About />
        </ParallaxLayer>

        {/*Page 3*/}
        <ParallaxLayer
          offset={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Examples />
        </ParallaxLayer>

        {/*Page 4*/}
        <ParallaxLayer
          offset={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
