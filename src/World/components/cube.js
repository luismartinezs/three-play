import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
} from "three";

const radiansPerSecond = MathUtils.degToRad(30);

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load("/assets/textures/uv-test-bw.png");

  // create a "standard" material
  const material = new MeshStandardMaterial({ map: texture });

  return material;
}

function createCube() {
  // create a geometry
  // 2x2x2 cube in meters
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  // MeshBasicMaterial does not react to lights
  // const material = new MeshBasicMaterial();
  // a physically correct "standard" material
  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  // monkey patching https://en.wikipedia.org/wiki/Monkey_patch
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    // the delta ensures that the rotation is the same regardless of the frame rate, the cube rotates the same amount each second regardless of the device
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
