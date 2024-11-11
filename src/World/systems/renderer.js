import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  // always enable this
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };