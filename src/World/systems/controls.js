import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;
  // controls.dampingFactor = 0.1;

  // important options
  // controls.enabled = false;
  // controls.enableRotate = false;
  // controls.enableZoom = false;
  // controls.enablePan = false;
  // controls.listenToKeyEvents(window);
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 1;
  // controls.minDistance = 5; // Make sure minDistance is not smaller than the camera’s near clipping plane
  // controls.maxDistance = 20; // and maxDistance is not greater than the camera’s far clipping plane
  // controls.minAzimuthAngle = -Infinity; // default
  // controls.maxAzimuthAngle = Infinity; // default
  // controls.minPolarAngle = 0; // default
  // controls.maxPolarAngle = Math.PI; // default

  // set orbiting center around 1 position of y axis
  // controls.target.y = 1;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
