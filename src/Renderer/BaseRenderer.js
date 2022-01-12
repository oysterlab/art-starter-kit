import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'

class BaseRenderer {
  init(canvas, width, height) {
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, width/height, 1, 1000)  
    camera.position.z = 5

    const renderer = new WebGLRenderer({canvas, antialias:true})
    renderer.setSize(width, height)

    this.renderer = renderer
    this.canvas = canvas
    this.scene = scene
    this.camera = camera

    this.animate()
  }

  update() {}

  animate() {
    const { renderer, scene, camera } = this
    this.update()
    renderer.render(scene, camera)
    requestAnimationFrame(() => this.animate())
  }

  resize(width, height) {
    this.renderer.setSize(width, height)
  }
}

export default BaseRenderer