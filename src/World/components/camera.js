import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View in degrees
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane, objects closer to the camera than ten centimeters will not be visible
    100, // far clipping plane, we can see for a distance of one hundred meters
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };