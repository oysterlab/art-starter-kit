import { BoxGeometry, Mesh, MeshNormalMaterial } from 'three'
import BaseRenderer from './BaseRenderer'

class CubeSampleRenderer extends BaseRenderer {

  init(canvas, width, height) {
    super.init(canvas, width, height)

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshNormalMaterial()

    const box = new Mesh(geometry, material)
    this.scene.add(box)
    this.box = box
  }

  update() {
    if (!this.box) return
    this.box.rotation.y += 0.01
    this.box.rotation.z += 0.01
  }
}

export default CubeSampleRenderer