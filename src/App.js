import Canvas from './Component/Canvas'
import { useEffect, useState } from 'react'
import CubeSampleRenderer from './Renderer/CubeSampleRenderer'
import BaseRenderer from './Renderer/BaseRenderer'

const init = (setScreenSize) => {
  window.addEventListener('resize', () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight        
    })
  })
}

function App() {
  const [renderer, _] = useState(() => new CubeSampleRenderer())
  
  console.log(renderer)

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  
  useEffect(() => init(setScreenSize), [])

  return (
    <>
      <Canvas renderer={renderer} width={screenSize.width} height={screenSize.height} />
    </>
  );
}

export default App;
