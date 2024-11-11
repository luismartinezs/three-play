import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

// "private" variables not exposed outside of the class
// note: only works for singleton pattern
let camera;
let renderer;
let scene;
let loop;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);

    const controls = createControls(camera, renderer.domElement);

    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    loop.updatables.push(controls);
    // disable mesh rotation
    // loop.updatables.push(cube);

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);

    // we do not need this because we are using the loop
    // resizer.onResize = () => {
    //   this.render();
    // };

    // re-render when user interacts with the controls
    controls.addEventListener("change", () => {
      this.render();
    });
  }
  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
