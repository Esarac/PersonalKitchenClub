import Title from './slides/Title';
import Functionalities from './slides/Functionalities'
import Examples from './slides/Examples'

import Page from '../components/Page'

function App() {
  return (
    <>
        <Page theme='primary' page={0}>
            <Title/>
        </Page>

        <Page theme='secondary' page={1}>
            <Functionalities/>
        </Page>

        <Page theme='light' page={2}>
            <Examples/>
        </Page>
    </>
  );
}

export default App;
