import * as THREE from './three/three.module.js';
import { PointerLockControls } from './three/jsm/controls/PointerLockControls.js';
import { OrbitControls } from "./three/jsm/controls/OrbitControls.js";
import randomInt from './randomNextInt.js';
import { GLTFLoader } from './three/jsm/loaders/GLTFLoader.js';


// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd2d2d2);
scene.fog = new THREE.Fog(0xfefefe, 1, 1100);

// Geomtry
const sceneGeo = new THREE.SphereGeometry(700, 80, 80);
const sceneTexture = new THREE.TextureLoader().load('./assets/images/worldTexture.jpg');

sceneTexture.mapping = THREE.EquirectangularReflectionMapping;


// Materials
const normalMat = new THREE.MeshNormalMaterial();
const basicMat = new THREE.MeshBasicMaterial({color: 0x33DDFF});
const sceneMat = new THREE.MeshBasicMaterial({ 
    color: 0xFFFFFF, 
    map: sceneTexture, 
    side: THREE.DoubleSide 
});
// const standarMat = new THREE.MeshStandardMaterial({
//     roughness: 1.0,
//     metalness: 1.0,
//     color: 0x33DDFF
// });


const sceneMesh = new THREE.Mesh(sceneGeo, sceneMat);
// scene.add(sceneMesh);



const params = {
    exposure: 1.0,
    toneMapping: 'ACESFilmic'
};

const toneMappingOptions = {
    None: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping,
    Custom: THREE.CustomToneMapping
};

let mesh;
const loadGLTF = async (scene) =>  {
    const gltfLoader = new GLTFLoader().setPath( './assets/glTF/' );

    const gltf = await gltfLoader.loadAsync('DamagedHelmet.gltf');
    
    
    gltf.scene.traverse( function ( child ) {
    
        if ( child.isMesh ) {
    
            mesh = child;
            mesh.castShadow = true;
            mesh.translateX(-5);
            mesh.translateY(40);
            mesh.translateZ(-10);
            scene.add( mesh );
            
        }
    
    } );
}


const result = loadGLTF(scene);



// let standarMaterials = [];

const colorList = [
    0xFE2712,
    0xFABC02,
    0xFEFE33,
    0x66B032,
    0x0391CE,
    0x8601AF
];

// Mesh

const generateBox = () => {
    const matColor = colorList[Math.floor(randomInt(0, 6))];
    // console.log(`color ${colorList[Math.floor(randomInt(0, 6))]}`);
    const standarMat = new THREE.MeshStandardMaterial({
        roughness: 1.0,
        metalness: 1.0,
        color: matColor
    });
    const boxGeo = new THREE.BoxGeometry(3, 3, 3);
    const boxMesh = new THREE.Mesh( boxGeo, standarMat);
    boxMesh.castShadow = true;
    boxMesh.position.set(randomInt(-20, 20), randomInt(0, 20), randomInt(-20, 20));
    scene.add(boxMesh);
}

for (let i = 0; i < 30; i++) {
    generateBox();
}


// Flooring

const floorGeo = new THREE.PlaneGeometry(100, 100);
const floorMat = new THREE.MeshStandardMaterial({ 
    color: 0x545454, 
    side: THREE.DoubleSide
});
const floor = new THREE.Mesh( floorGeo, floorMat );
// floor.position.set(0, 0, 0);
floor.rotation.set(Math.PI / 2, 0, 0);
floor.receiveShadow = true;


scene.add( floor );


// Scoring
const currentScoreElement = document.getElementById("current-score");
const hightScoreElement = document.getElementById("high-score");
const rightPair = 50;
const wrongPair = -20;


let currentScore = 0;
let highScore = 0;

// Light
const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( hemiLight );


const light = new THREE.PointLight( 0xffffff, 1, 1000 );
light.position.set( -10, 50, 60 );
light.castShadow = true;
scene.add( light );



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
camera.position.set(0, 10, 50);
scene.add(camera);


const onKeyDown = (event) => {
    console.log(`key code ${event.code}`);
    switch ( event.code ) {
        case 'Escape':
            // moveForward = false;
            break;
            
        case 'Enter':
                // moveForward = false;
            controls.lock();
            break;

    }
    console.log(`locked? ${controls.isLocked}`);
}


// Use FPS Control
// const controls = new PointerLockControls(camera, canvas);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;



controls.addEventListener( 'lock', function () {

    // instructions.style.display = 'none';
    // blocker.style.display = 'none';

} );

controls.addEventListener( 'unlock', function () {

    // blocker.style.display = 'block';
    // instructions.style.display = '';

} );

document.addEventListener('keydown', onKeyDown);



/**
 * Function
 */

let selectedObject = [];
let originalColors = [];

const disposeObject = () => {

    let first = selectedObject[0].material.color.getHex();
    let second = selectedObject[1].material.color.getHex();

    if (first === second) {
        selectedObject.forEach(object => {
            object.geometry.dispose();
            object.material.dispose();
            scene.remove(object);
            renderer.renderLists.dispose();
        });
        currentScore += rightPair;
    } else {
        currentScore += wrongPair;
    }
    currentScoreElement.innerHTML = currentScore;
    originalColors = [];
    selectedObject = [];
}



/**
 * Raycast
 */
const rayCast = new THREE.Raycaster();


const onMouseClick = (e) => {

    let intersects = rayCast.intersectObjects(scene.children, false);

    if (intersects[0]) {
        let firstObject = intersects[0].object;
        if (selectedObject.length > 0) {
            if (firstObject.uuid === selectedObject[0].uuid) {
                firstObject.material.emissive.setHex(0x000000);
                selectedObject = [];
                originalColors = [];
                return;
            }
        }

        selectedObject.push(firstObject);
        originalColors.push(firstObject.material.color.getHex());
        if (selectedObject.length > 1) {
            disposeObject();
        }
        // disposeObject();
    }
}

// document.addEventListener("click", onMouseClick);
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
renderer.toneMapping = toneMappingOptions[ params.toneMapping ];
renderer.toneMappingExposure = params.exposure;

renderer.outputEncoding = THREE.sRGBEncoding;

scene.background = sceneTexture;
scene.environment = sceneTexture;

// Set CustomToneMapping to Uncharted2
// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/

THREE.ShaderChunk.tonemapping_pars_fragment = THREE.ShaderChunk.tonemapping_pars_fragment.replace(
    'vec3 CustomToneMapping( vec3 color ) { return color; }',
    `#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
    float toneMappingWhitePoint = 1.0;
    vec3 CustomToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
    }`
);
/**
 * Animate
 */

const clock = new THREE.Clock();

let treeshold = 0;
let speed = 0.002;
const baseSpeed = 0.002;

let pointedObject;
let pointedObjectColor;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();


    if (controls.isLocked === true) {

        rayCast.ray.origin.copy( controls.getObject().position );
        // rayCast.ray.origin.y -= 10;
        
        controls.getDirection( rayCast.ray.direction );

        // let intersects = rayCast.intersectObjects(scene.children, false);

        // if (intersects[0]) {
        //     if (pointedObject) {
        //         pointedObject.material.emissive.setHex(0x000000);
        //     }

        //     pointedObject = intersects[0].object;
        //     pointedObjectColor = pointedObject.material.color.getHex();
        //     console.log(`new pointedObject`);
        //     // disposeObject();
        // } else {
        //     pointedObject = undefined;
        // }

    }

    // if (pointedObject) {
    //     // pointedObject.material.emissive.setHex(elapsedTime % 0.5 >= 0.25 ? pointedObjectColor : 0x000000);
    //     pointedObject.material.emissive.setHex(pointedObjectColor);
    //     console.log(`set emissive`);
    // }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick();


