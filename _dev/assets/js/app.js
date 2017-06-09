import Hello from './src/Hello'

(function(){
  new Hello();

  var scene1 = new THREE.Scene();
  var scene2 = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  var renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setClearColor( 0x000000, 0 );
  winResize();
  document.body.appendChild(renderer.domElement);

  // add object
  var cube = drawCube();
  scene1.add(cube);

  var line = drawLine();
  scene1.add(line);

  // set camera position
  // camera.position.z = 5;

  render();

  function drawCube(){
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.z = 90;
    return cube;
  }

  function drawLine(){
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    geometry.vertices.push(new THREE.Vector3(10, 0, 0));
    var material = new THREE.LineBasicMaterial({color: 0x0000ff});
    var line = new THREE.Line(geometry, material);
    return line;
  }


  function render(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(render);
    renderer.render(scene1, camera);
    //renderer.render(scene2, camera);
  }

  function winResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', function(){
    winResize();
  }, false);
})();