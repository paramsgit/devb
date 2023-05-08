import './App.css';
import './mycss.css';
import { Host } from './files/host';
import { Post } from './files/Post';
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
  <>
   <ParallaxProvider>
  <Host/>
  <Post/>
  </ParallaxProvider>
  </>
  );
}

export default App;
