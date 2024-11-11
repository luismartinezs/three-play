import { World } from "./World/World.js";

// create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // produce a single frame (render on demand)
  // world.render();

  // start the loop (produce a stream of frames)
  world.start();
}

// call main to start the app
main();
