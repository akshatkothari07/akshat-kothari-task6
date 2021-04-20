const { Sphere, SphereGeometry } = require("./three");

var scene= new THREE.Scene()
var camera= new THREE.PerspectiveCamera( 75,window.innerWidth/window.innerHeight,1,10000);
camera.position.set=(0, 0, 20);

var renderer= new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor("black");

document.body.appendChild(renderer.domElement);
window.addEventListener('resize',() => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});

var geometry= new THREE.SphereGeometry(1,10,10);
var material= new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('/bitslogo.png')});
var mesh= new THREE.Mesh(geometry,material);
scene.add(mesh);

var render=function(){
    requestAnimationFrame(render);
    mesh.rotation.y +=0.01;
    renderer.render(scene,camera);
}




