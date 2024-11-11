import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

// Get a reference to the container element that will hold our scene
const container = document.querySelector("#scene-container");

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color("skyblue");

// Create a camera
// "viewing fustrum" parameters, ie bounded region of space:
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);
// const camera = new OrthographicCamera(left, right, top, bottom, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const length = 2;
const width = 2;
const depth = 2;

const geometry = new BoxBufferGeometry(length, width, depth);

// create a default (white) Basic material
// ignores lights, colors mesh based on material
const material = new MeshBasicMaterial();
// MeshBasicMaterial is one of the few materials that does not need a light

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);
// scene.remove(_mesh_)

// create the renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
