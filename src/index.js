import "//unpkg.com/three"
import "//unpkg.com/three-forcegraph"
import "//unpkg.com/three/examples/js/controls/TrackballControls.js"
import "//unpkg.com/three-forcegraph"




class GraphVisualization extends HTMLElement {
  connectedCallback(){
    // Gen random data

    this.width = window.innerWidth
    this.height = window.innerHeight

    const container = document.createElement('div')
    this.appendChild(container)
    const gData = {
      nodes: [{id:'ANCHOR', x:0, y:0}],
      links: []
      
    };

    this.Graph = new ThreeForceGraph()
      .graphData(gData);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(this.Graph);
    scene.add(new THREE.AmbientLight(0xbb00bb));

    // Setup camera
    this.initCamera()

    // Add camera controls
    const tbControls = new THREE.TrackballControls(this.camera, renderer.domElement);

    // Kick-off renderer
    const animate = () => { // IIFE
      this.Graph.tickFrame();

      // Frame cycle
      tbControls.update();
      renderer.render(scene, this.camera);
      requestAnimationFrame(animate);
    }

    animate()

  }

  initCamera(){
    const camera = this.camera = new THREE.PerspectiveCamera();
    camera.far = 10000;
    camera.aspect = this.width/this.height;
    camera.updateProjectionMatrix();
    camera.lookAt(this.Graph.position);
    camera.position.z = 100;
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('graph-container', GraphVisualization)






class GraphNode extends HTMLElement {
  connectedCallback(){
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('g-node', GraphNode)






class GraphEdge extends HTMLElement {
  connectedCallback(){
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, old_value, new_value){
    switch(name){
      default:
    }
  }

}

customElements.define('g-edge', GraphEdge)




