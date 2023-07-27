import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Firstapp from './firstapp';
import { Tost } from './files/projects-files/tost';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  })
return (
 <>

<Router>
{/* <Firstapp/> */}
      <Routes>
        {/* <Route exact path="/">
          <Firstapp />
        </Route>
        <Route path="/about">
          <Tost />
        </Route> */}
        <Route exact path="/" element={<Firstapp/>} />
          <Route path="/hostel" element={<Tost/>} />
      </Routes>
    </Router>





  </>
  );
}

export default App;
