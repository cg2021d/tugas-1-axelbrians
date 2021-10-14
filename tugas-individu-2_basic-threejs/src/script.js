import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { generateUUID } from 'three/src/math/mathutils';
import { DirectionalLight, SpotLightHelper } from 'three';


// Canvas
const canvas = document.querySelector('canvas.webgl');


// Scene
const scene = new THREE.Scene();


// Grid helper
// const gridHelper = new THREE.GridHelper( 1000, 1000 );
// scene.add( gridHelper );


// Geomtry
const sphereGeo = new THREE.SphereGeometry(0.5, 32, 16);
const boxGeo = new THREE.BoxGeometry(3, 3, 3);
const ballGeo = new THREE.TorusGeometry( 2, 1, 16, 100 );

// Materials
const normalMat = new THREE.MeshNormalMaterial();
const basicMat = new THREE.MeshBasicMaterial({color: 0x33DDFF});
const whiteBasicMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
const phongMat = new THREE.MeshPhongMaterial({
    color: 0x33DDFF,
    shininess: 50.0,
    flatShading: true
});
const physicMat = new THREE.MeshPhysicalMaterial({
    reflectivity: 1.0,
    color: 0x33DDFF
});
const standarmat = new THREE.MeshStandardMaterial({
    roughness: 0.5,
    metalness: 1.0,
    color: 0x33DDFF
});
const toonMat = new THREE.MeshToonMaterial({ color: 0x33DDFF });
const depthMat = new THREE.MeshDepthMaterial({ 
    color: 0x33DDFF,
});
const lambertMat = new THREE.MeshLambertMaterial({
    color: 0x33DDFF
});



// Mesh
const sphereNormal = new THREE.Mesh(sphereGeo, whiteBasicMat);
const boxNormal = new THREE.Mesh(ballGeo, normalMat);
const boxBasic = new THREE.Mesh(ballGeo, basicMat);
const boxPhong = new THREE.Mesh(ballGeo, phongMat);
const boxPhysic = new THREE.Mesh(ballGeo, physicMat);
const boxStandar = new THREE.Mesh(ballGeo, standarmat);
const boxToon = new THREE.Mesh(ballGeo, toonMat);
const boxDepth = new THREE.Mesh(ballGeo, depthMat);
const boxLambert = new THREE.Mesh(ballGeo, lambertMat);

// sphereNormal.castShadow = true;
boxNormal.castShadow = true;
boxBasic.castShadow = true;
boxPhong.castShadow = true;
boxPhysic.castShadow = true;
boxStandar.castShadow = true;
boxToon.castShadow = true;
boxDepth.castShadow = true;
boxLambert.castShadow = true;


sphereNormal.position.set(0, 0, 0);
boxNormal.position.set(-12, 8, 0);
boxBasic.position.set(0, 8, 0);
boxPhong.position.set(12, 8, 0);
boxPhysic.position.set(-12, 0, 0);
boxStandar.position.set(12, 0, 0);
boxToon.position.set(-12, -8, 0);
boxDepth.position.set(0, -8, 0);
boxLambert.position.set(12, -8, 0);


// Add mesh to canvass
scene.add(
    sphereNormal,
    boxNormal, 
    boxBasic, 
    boxPhong, 
    boxPhysic, 
    boxStandar, 
    boxToon,
    boxDepth,
    boxLambert
);


// Cube background
const geometry = new THREE.PlaneGeometry( 50, 50 );
const material = new THREE.MeshStandardMaterial( {color: 0x343434, side: THREE.DoubleSide} );
const planes = [];
for (let i = 0; i < 5; i++) {
    let plane = new THREE.Mesh( geometry, material );
    plane.receiveShadow = true;
    planes.push(plane);
}

planes[0].rotation.set(0, 1.5708, 0);
planes[0].position.set(20, 0, 0);

planes[1].rotation.set(0, 1.5708, 0);
planes[1].position.set(-20, 0, 0);

planes[2].position.set(0, 0, -20);

planes[3].rotation.set(1.5708, 0, 0);
planes[3].position.set(0, 20, 0);

planes[4].rotation.set(1.5708, 0, 0);
planes[4].position.set(0, -20, 0);

scene.add(planes[0], planes[1], planes[2], planes[3], planes[4]);




// Lights option

// Point Light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.castShadow = true;
pointLight.position.set(0, 0, 0);
scene.add(pointLight);


// Spot Light
const spotLight = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI/8 );
spotLight.position.set( 0, 0, 50 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 0.5;
spotLight.shadow.camera.far = 500;
spotLight.shadow.camera.fov = 30;

spotLight.shadow.focus = 1;
spotLight.visible = false;
scene.add( spotLight );


const spotLightHelper = new THREE.SpotLightHelper( spotLight );
spotLightHelper.visible = false;
scene.add( spotLightHelper );


const ambientLight = new THREE.AmbientLight( 0xffffff ); // soft white light
ambientLight.visible = false;
scene.add( ambientLight );


const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.visible = false;
scene.add( directionalLight );

const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
hemiLight.visible = false;
scene.add( hemiLight );


// Debug
const gui = new dat.GUI();

gui.add(pointLight, 'visible').onChange(setValue).name('PointLight');
gui.add(spotLight, 'visible').onChange(setValue).name('SpotLight');
gui.add(spotLightHelper, 'visible').onChange(setValue).name('SpotLightHelper');
gui.add(ambientLight, 'visible').onChange(setValue).name('AmbientLight');
gui.add(directionalLight, 'visible').onChange(setValue).name('DirectionalLight');
gui.add(hemiLight, 'visible').onChange(setValue).name('HemiLight');


function setValue() {
    if (pointLight.visible === true) {
        sphereNormal.visible = true;
    } else {
        sphereNormal.visible = false;
    }
}








/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 0, 30);
scene.add(camera);


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

/**
 * Animate
 */

const clock = new THREE.Clock()

let direction = "right";
const speed = 0.1;

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    sphereNormal.rotation.set(elapsedTime, elapsedTime, elapsedTime);
    boxNormal.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxBasic.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxPhong.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxPhysic.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxStandar.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxToon.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxDepth.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    boxLambert.rotation.set(elapsedTime * 0.2, elapsedTime * 0.09, elapsedTime * 0.12);
    // Update objects

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()