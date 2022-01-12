# art-starter-kit

Work for quick interactive art

## Usage

After cloning this repo and install all node dependencies
```bash
npm i
```

Then launch the main task to open the livereload server
```bash
npm run start
```

To create a new art renderer
1. create new class extends with ```BaseRenderer```
2. override ```init(canvas, width, height)```  
3. override ```update()``` (this would be invoked following ```requestAnimationFrame``` rules)
Just take a look ```src/Renderer/CubeSampleRenderer.js```

