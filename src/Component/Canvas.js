import { useEffect, useRef } from 'react'

function Canvas({renderer, width, height}) {
  const canvasRef = useRef(null)
  useEffect(() => renderer.init(canvasRef.current, width, height), [canvasRef])
  useEffect(() => renderer.resize(width, height), [width, height])

  return (
    <>
      <canvas ref={canvasRef}/>
    </>
  )
}

export default Canvas