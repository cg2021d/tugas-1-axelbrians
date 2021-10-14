import Scene from "./WEBGL/Scene.js";
import Geometry from "./WEBGL/Geometry.js";
import Vector3 from "./WEBGL/Vector3.js";
import Face from "./WEBGL/Face.js";
import Color from "./WEBGL/Color.js";

let canvas, scene;
let geometryLeft;
let geometryRight;

let offset = 0.6;

function main() {
    canvas = document.getElementById("glCanvas");
    scene = new Scene(canvas);

    geometryLeft = new Geometry();
    geometryRight = new Geometry();

    addGeometryLeft();

    addColorLeft();

    geometryLeft.setMovement(0.0, 0.0, 0.0);

    addFaceLeft();

    scene.add(geometryLeft);

    addGeometryRight();

    addColorRight();

    geometryRight.setMovement(0.0, 0.0137, 0.0);

    addFaceRight();

    scene.add(geometryRight);
}

function update() {
    scene.render();
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

window.onload = () => {
    main();
    animate();
};

function addGeometryLeft() {

    //left metal tip
    geometryLeft.addVertice(new Vector3(-0.30 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.315 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.315 - offset, -0.03, 0));

    geometryLeft.addVertice(new Vector3(-0.30 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset, -0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.315 - offset, -0.03, 0));


    //left yellow tip curve
    geometryLeft.addVertice(new Vector3(-0.3 - offset, 0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.307 - offset, 0, 0));
    geometryLeft.addVertice(new Vector3(-0.3 - offset, -0.10, 0));


    //left yellow tip top
    geometryLeft.addVertice(new Vector3(-0.3 - offset, 0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.015, 0));

    geometryLeft.addVertice(new Vector3(-0.3 - offset, 0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.3 - offset, 0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.015, 0));

    // left yellow tip middle
    geometryLeft.addVertice(new Vector3(-0.3 - offset, 0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.015, 0));

    geometryLeft.addVertice(new Vector3(-0.3 - offset, 0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.3 - offset, -0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.015, 0));

    //left yellow tip bottom
    geometryLeft.addVertice(new Vector3(-0.3 - offset, -0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.3 - offset, -0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.10, 0));

    geometryLeft.addVertice(new Vector3(-0.3 - offset, -0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.015, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.10, 0));

    // left yellow body top curve
    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.268 - offset, 0.16, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.268 - offset, 0.16, 0));
    geometryLeft.addVertice(new Vector3(-0.266 - offset, 0.17, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.266 - offset, 0.17, 0));
    geometryLeft.addVertice(new Vector3(-0.264 - offset, 0.18, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.264 - offset, 0.18, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, 0.19, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, 0.19, 0));
    geometryLeft.addVertice(new Vector3(-0.254 - offset, 0.20, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.20, 0));
    geometryLeft.addVertice(new Vector3(-0.254 - offset, 0.20, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.20, 0));
    geometryLeft.addVertice(new Vector3(-0.254 - offset, 0.20, 0));

    // left yellow body
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.02, 0));
    geometryLeft.addVertice(new Vector3(-0.24 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.14, 0));

    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.02, 0));
    geometryLeft.addVertice(new Vector3(-0.24 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, 0.01, 0));

    geometryLeft.addVertice(new Vector3(-0.26 - offset, 0.01, 0));
    geometryLeft.addVertice(new Vector3(-0.24 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.25 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(-0.24 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.25 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(-0.24 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.14, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.02, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(-0.25 - offset, 0.005, 0));


    // left yellow body bottom
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.1, 0));


    // left yellow body bottom curve
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, -0.12, 0));

    geometryLeft.addVertice(new Vector3(-0.2 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, -0.12, 0));

    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.12, 0));

    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.1, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.12, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.18, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.27 - offset, -0.18, 0));
    geometryLeft.addVertice(new Vector3(-0.265 - offset, -0.195, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.265 - offset, -0.195, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, -0.198, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.26 - offset, -0.198, 0));
    geometryLeft.addVertice(new Vector3(-0.25 - offset, -0.2, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.25 - offset, -0.2, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.2, 0));


    // top metal case
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.20, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.20, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.12, 0));

    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.20, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.12, 0));

    // middle left metal case
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.18 - offset, 0.08, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.08, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.18 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.18 - offset, 0.08, 0));

    // middle right metal case
    geometryLeft.addVertice(new Vector3(-0.18 - offset, 0.08, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.08, 0));

    geometryLeft.addVertice(new Vector3(-0.18 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.12, 0));
    geometryLeft.addVertice(new Vector3(-0.18 - offset, 0.08, 0));

    // bottom metal case
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.08, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.08, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.08, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.005, 0));

    // side metal case
    geometryLeft.addVertice(new Vector3(-0.20 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.2, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, -0.2, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset, -0.2, 0));

    // side metal case right curve
    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, -0.2, 0));
    geometryLeft.addVertice(new Vector3(0.09 - offset, -0.19, 0));

    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.09 - offset, -0.19, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, -0.165, 0));

    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, -0.165, 0));

    // metal gear holder
    geometryLeft.addVertice(new Vector3(0.117 - offset, 0.02, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.02, 0));
    geometryLeft.addVertice(new Vector3(0.117 - offset, -0.01, 0));

    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.02, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.01, 0));
    geometryLeft.addVertice(new Vector3(0.117 - offset, -0.01, 0));

    // geometryLeft.addVertice(new Vector3(0.14 - offset, 0.02, 0));
    // geometryLeft.addVertice(new Vector3(0.14 - offset, -0.01, 0));
    // geometryLeft.addVertice(new Vector3(0.145 - offset, 0.005, 0));

    // yellow gear
    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.035, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, 0.035, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.025, 0));

    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.025, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, 0.035, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, -0.025, 0));

    geometryLeft.addVertice(new Vector3(0.15 - offset, 0.035, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, -0.025, 0));
    geometryLeft.addVertice(new Vector3(0.155 - offset, 0.005, 0));

    // metal case right side
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.20, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.11 - offset, 0.18, 0));

    geometryLeft.addVertice(new Vector3(0.11 - offset, 0.18, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.12 - offset, 0.005, 0));

    geometryLeft.addVertice(new Vector3(0.10 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.12 - offset, 0.005, 0));
    geometryLeft.addVertice(new Vector3(0.10 - offset, -0.165, 0));

}

function addColorLeft() {
    geometryLeft.addColor(new Color(color(175), color(161), color(136), 1));
    geometryLeft.addColor(new Color(color(175), color(161), color(136), 1));
    geometryLeft.addColor(new Color(color(175), color(161), color(136), 1));

    geometryLeft.addColor(new Color(color(175), color(161), color(136), 1));
    geometryLeft.addColor(new Color(color(175), color(161), color(136), 1));
    geometryLeft.addColor(new Color(color(175), color(161), color(136), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(255), color(226), 1));
    geometryLeft.addColor(new Color(color(255), color(255), color(226), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(255), color(226), 1));

    
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));


    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));
    geometryLeft.addColor(new Color(color(244), color(174), color(1), 1));

    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));

    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));
    geometryLeft.addColor(new Color(color(248), color(249), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));

    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));
    geometryLeft.addColor(new Color(color(248), color(249), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(185), color(1), 1));

    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));
    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));
    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));

    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));
    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));
    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));

    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));
    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));
    geometryLeft.addColor(new Color(color(254), color(197), color(1), 1));

    geometryLeft.addColor(new Color(color(251), color(186), color(1), 1));
    geometryLeft.addColor(new Color(color(255), color(254), color(188), 1));
    geometryLeft.addColor(new Color(color(255), color(254), color(188), 1));

    geometryLeft.addColor(new Color(color(255), color(254), color(188), 1));
    geometryLeft.addColor(new Color(color(255), color(254), color(188), 1));
    geometryLeft.addColor(new Color(color(251), color(186), color(1), 1));

    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));

    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));

    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));

    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));
    geometryLeft.addColor(new Color(color(254), color(179), color(0), 1));

    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    
    geometryLeft.addColor(new Color(color(194), color(135), color(74), 1));
    geometryLeft.addColor(new Color(color(91), color(51), color(22), 1));
    geometryLeft.addColor(new Color(color(91), color(51), color(22), 1));
    
    geometryLeft.addColor(new Color(color(196), color(144), color(72), 1));
    geometryLeft.addColor(new Color(color(196), color(144), color(72), 1));
    geometryLeft.addColor(new Color(color(91), color(51), color(22), 1));
    
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));

    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    
    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));
    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));

    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));

    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));

    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));

    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));
    geometryLeft.addColor(new Color(color(254), color(254), color(236), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));

    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));
    geometryLeft.addColor(new Color(color(194), color(177), color(159), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));

    geometryLeft.addColor(new Color(color(194), color(177), color(159), 1));
    geometryLeft.addColor(new Color(color(194), color(177), color(159), 1));
    geometryLeft.addColor(new Color(color(58), color(53), color(45), 1));

    geometryLeft.addColor(new Color(color(201), color(186), color(91), 1));
    geometryLeft.addColor(new Color(color(216), color(226), color(137), 1));
    geometryLeft.addColor(new Color(color(201), color(186), color(91), 1));

    geometryLeft.addColor(new Color(color(201), color(186), color(91), 1));
    geometryLeft.addColor(new Color(color(216), color(226), color(137), 1));
    geometryLeft.addColor(new Color(color(216), color(226), color(137), 1));
    
    geometryLeft.addColor(new Color(color(216), color(226), color(137), 1));
    geometryLeft.addColor(new Color(color(216), color(226), color(137), 1));
    geometryLeft.addColor(new Color(color(216), color(226), color(137), 1));

    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));

    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));

    geometryLeft.addColor(new Color(color(249), color(249), color(231), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    geometryLeft.addColor(new Color(color(44), color(39), color(26), 1));
    
}

function color(value) {
    return value / 255;
}

function addFaceLeft() {
    for(let i=0; i<geometryLeft._vertices.length; i+=3) {
        geometryLeft.addFace(new Face(i, i+1, i+2));
    }
}

function addGeometryRight() {

    // top left part
    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.6, 0));
    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.235 + offset, 0.6, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.235 + offset, 0.6, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.58, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.58, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.45, 0));

    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.58, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, 0.52, 0));

    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, 0.52, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, 0.45, 0));


    // top rigt part
    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.6, 0));
    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.035 + offset, 0.6, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.035 + offset, 0.6, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, 0.58, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, 0.58, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, 0.45, 0));

    geometryRight.addVertice(new Vector3(0.055 + offset, 0.58, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, 0.52, 0));

    geometryRight.addVertice(new Vector3(0.055 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, 0.52, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, 0.45, 0));


    // middle left side
    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.15, 0));

    geometryRight.addVertice(new Vector3(-0.285 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.15, 0));

    geometryRight.addVertice(new Vector3(-0.125 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.45, 0));

    geometryRight.addVertice(new Vector3(-0.255 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.15, 0));


    // middle middle
    geometryRight.addVertice(new Vector3(-0.125 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.075 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.1, 0));

    geometryRight.addVertice(new Vector3(-0.075 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.075 + offset, -0.1, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.1, 0));

    geometryRight.addVertice(new Vector3(-0.075 + offset, -0.1, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.1, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.15, 0));

    geometryRight.addVertice(new Vector3(-0.075 + offset, -0.1, 0));
    geometryRight.addVertice(new Vector3(-0.125 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.075 + offset, -0.15, 0));


    // middle right
    geometryRight.addVertice(new Vector3(0.055 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.15, 0));

    geometryRight.addVertice(new Vector3(0.085 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.15, 0));

    geometryRight.addVertice(new Vector3(-0.075 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.075 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, 0.45, 0));

    geometryRight.addVertice(new Vector3(0.055 + offset, 0.45, 0));
    geometryRight.addVertice(new Vector3(-0.075 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.15, 0));


    // outside bottom part left
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.277 + offset, -0.19, 0));

    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.277 + offset, -0.19, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));

    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.22, 0));
    geometryRight.addVertice(new Vector3(-0.277 + offset, -0.19, 0));

    geometryRight.addVertice(new Vector3(-0.277 + offset, -0.19, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.22, 0));

    geometryRight.addVertice(new Vector3(-0.10 + offset, -0.247, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.10 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.10 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.31, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.31, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.33, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.33, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.35, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.35, 0));
    geometryRight.addVertice(new Vector3(-0.23 + offset, -0.34, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.23 + offset, -0.34, 0));
    geometryRight.addVertice(new Vector3(-0.25 + offset, -0.33, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.25 + offset, -0.33, 0));
    geometryRight.addVertice(new Vector3(-0.27 + offset, -0.315, 0));

    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(-0.27 + offset, -0.315, 0));

    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(-0.27 + offset, -0.315, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.29, 0));

    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.22, 0));
    geometryRight.addVertice(new Vector3(-0.285 + offset, -0.29, 0));


    // inside bottom part left
    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.255 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.242 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.245, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.247, 0));


    // outside bottom part right
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.077 + offset, -0.19, 0));

    geometryRight.addVertice(new Vector3(0.055 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.077 + offset, -0.19, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));

    geometryRight.addVertice(new Vector3(0.085 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.22, 0));
    geometryRight.addVertice(new Vector3(0.077 + offset, -0.19, 0));

    geometryRight.addVertice(new Vector3(0.077 + offset, -0.19, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.22, 0));

    geometryRight.addVertice(new Vector3(-0.10 + offset, -0.247, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.10 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(0.0 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.10 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.31, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.31, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.33, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.33, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.35, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.35, 0));
    geometryRight.addVertice(new Vector3(0.03 + offset, -0.34, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.03 + offset, -0.34, 0));
    geometryRight.addVertice(new Vector3(0.05 + offset, -0.33, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.05 + offset, -0.33, 0));
    geometryRight.addVertice(new Vector3(0.07 + offset, -0.315, 0));

    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(0.07 + offset, -0.315, 0));

    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(0.07 + offset, -0.315, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.29, 0));

    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.22, 0));
    geometryRight.addVertice(new Vector3(0.085 + offset, -0.29, 0));


    // inside bottom part right
    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.055 + offset, -0.20, 0));
    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.042 + offset, -0.23, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.245, 0));

    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.15, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.245, 0));
    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.247, 0));


    // bottom middle circle
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.3, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.4, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.4, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.4, 0));

    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.4, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.4, 0));
    geometryRight.addVertice(new Vector3(-0.1 + offset, -0.41, 0));



    // bottom circle left
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(-0.20 + offset, -0.31, 0));

    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.2 + offset, -0.31, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.33, 0));

    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.33, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.35, 0));

    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.21 + offset, -0.35, 0));
    geometryRight.addVertice(new Vector3(-0.205 + offset, -0.39, 0));

    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.205 + offset, -0.39, 0));
    geometryRight.addVertice(new Vector3(-0.18 + offset, -0.4, 0));


    // bottom circle right
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.3, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.31, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(0.0 + offset, -0.31, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.33, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.33, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.35, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(0.01 + offset, -0.35, 0));
    geometryRight.addVertice(new Vector3(0.005 + offset, -0.39, 0));

    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.325, 0));
    geometryRight.addVertice(new Vector3(0.005 + offset, -0.39, 0));
    geometryRight.addVertice(new Vector3(-0.02 + offset, -0.4, 0));
}

function addColorRight() {
    
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));


    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));


    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));


    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));


    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));


    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(111), color(100), color(85), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(111), color(100), color(85), 1));
    geometryRight.addColor(new Color(color(111), color(100), color(85), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(105), color(95), color(81), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(105), color(95), color(81), 1));
    geometryRight.addColor(new Color(color(105), color(95), color(81), 1));

    
    geometryRight.addColor(new Color(color(204), color(90), color(38), 1));
    geometryRight.addColor(new Color(color(204), color(90), color(38), 1));
    geometryRight.addColor(new Color(color(204), color(90), color(38), 1));

    geometryRight.addColor(new Color(color(34), color(17), color(8), 1));
    geometryRight.addColor(new Color(color(34), color(17), color(8), 1));
    geometryRight.addColor(new Color(color(34), color(17), color(8), 1));

    
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));

    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));


    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(111), color(100), color(85), 1));
    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));

    geometryRight.addColor(new Color(color(49), color(49), color(41), 1));
    geometryRight.addColor(new Color(color(111), color(100), color(85), 1));
    geometryRight.addColor(new Color(color(111), color(100), color(85), 1));


    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));

    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));

    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(238), color(5), 1));

    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(238), color(5), 1));

    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(238), color(5), 1));

    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(0), 1));
    
    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(0), 1));

    geometryRight.addColor(new Color(color(255), color(215), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(215), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(215), color(3), 1));
    
    geometryRight.addColor(new Color(color(255), color(200), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(200), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(200), color(3), 1));

    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));



    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));

    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    geometryRight.addColor(new Color(color(19), color(18), color(13), 1));
    
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));
    geometryRight.addColor(new Color(color(254), color(161), color(0), 1));

    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(238), color(5), 1));

    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(238), color(5), 1));

    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(239), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(238), color(5), 1));

    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(0), 1));
    
    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(255), color(229), color(0), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(0), 1));

    geometryRight.addColor(new Color(color(255), color(215), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(215), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(215), color(3), 1));
    
    geometryRight.addColor(new Color(color(255), color(200), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(200), color(3), 1));
    geometryRight.addColor(new Color(color(255), color(200), color(3), 1));

    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(186), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(179), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));


    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(172), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(172), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(172), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(172), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(172), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(172), color(8), 1));


    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));


    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(229), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));

    geometryRight.addColor(new Color(color(253), color(211), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));
    geometryRight.addColor(new Color(color(253), color(169), color(8), 1));



    // let colors = [(Math.random()/2 + 0.45), (Math.random()/2 + 0.45), (Math.random()/2 + 0.45), (Math.random()/2 + 0.45)];
    // console.log(`vertices count: ${geometryRight._vertices.length}`);
    // for(let i=geometryRight._colors.length; i<=geometryRight._vertices.length; i++) {
    //     colors = [(Math.random()/2 + 0.45), (Math.random()/2 + 0.45), (Math.random()/2 + 0.45), 1];
    //     geometryRight.addColor(new Color(colors[0], colors[1], colors[2], colors[3]));
    // }
}

function addFaceRight() {
    for(let i=0; i<geometryRight._vertices.length; i+=3) {
        geometryRight.addFace(new Face(i, i+1, i+2));
    }
}