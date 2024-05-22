document.addEventListener('DOMContentLoaded', function () {
    const scene1 = new THREE.Scene();
    const camera1 = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    const renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize(400, 300);
    document.getElementById('model1').appendChild(renderer1.domElement);

    const loader1 = new THREE.GLTFLoader();
    loader1.load('assets/models/model1.glb', function (gltf) {
        scene1.add(gltf.scene);
        animate1();
    });

    camera1.position.z = 5;

    function animate1() {
        requestAnimationFrame(animate1);
        renderer1.render(scene1, camera1);
    }

    const scene2 = new THREE.Scene();
    const camera2 = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    const renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize(400, 300);
    document.getElementById('model2').appendChild(renderer2.domElement);

    const loader2 = new THREE.GLTFLoader();
    loader2.load('assets/models/model2.glb', function (gltf) {
        scene2.add(gltf.scene);
        animate2();
    });

    camera2.position.z = 5;

    function animate2() {
        requestAnimationFrame(animate2);
        renderer2.render(scene2, camera2);
    }
});
