import { loadBirds } from "./components/birds/birds.js";
import { createCamera } from "./components/camera.js";
import { createAxesHelper, createGridHelper } from "./helpers.js";
import { createCube } from "./components/cube.js";
import { createMeshGroup } from "./components/meshGroup.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { Train } from "./components/Train/Train.js";

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
let controls;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    // const cube = createCube();
    const { ambientLight, mainLight } = createLights();
    // const meshGroup = createMeshGroup();
    // const train = new Train();

    loop.updatables.push(controls);

    scene.add(ambientLight, mainLight);

    // loop.updatables.push(controls, meshGroup);
    // scene.add(ambientLight, mainLight, meshGroup);

    // disable mesh rotation
    // loop.updatables.push(cube);

    // scene.add(ambientLight, mainLight, cube);

    const resizer = new Resizer(container, camera, renderer);

    // scene.add(createAxesHelper(), createGridHelper());

    // we do not need this because we are using the loop
    // resizer.onResize = () => {
    //   this.render();
    // };

    // re-render when user interacts with the controls
    controls.addEventListener("change", () => {
      this.render();
    });
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position);

    scene.add(parrot, flamingo, stork);
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
