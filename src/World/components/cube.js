import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";

function createCube() {
  // create a geometry
  // 2x2x2 cube in meters
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  // MeshBasicMaterial does not react to lights
  // const material = new MeshBasicMaterial();
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: "purple" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
