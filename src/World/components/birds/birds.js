import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync("/assets/models/Parrot.glb"),
    loader.loadAsync("/assets/models/Flamingo.glb"),
    loader.loadAsync("/assets/models/Stork.glb"),
  ]);

  // console.log("Squaaawk!", parrotData);

  const scale = 0.02;

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 0.5);
  parrot.scale.set(scale, scale, scale);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(2, 1, -2);
  flamingo.scale.set(scale, scale, scale);

  const stork = setupModel(storkData);
  stork.position.set(-0.5, -0.3, -4);
  stork.scale.set(scale, scale, scale);

  return {
    parrot,
    flamingo,
    stork,
  };
}
export { loadBirds };
