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
      .graphData(gData)

    // Setup renderer
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(this.width, this.height)
    container.appendChild(this.renderer.domElement)

    // Setup scene
    this.scene = new THREE.Scene()
    this.scene.add(this.Graph)
    this.scene.add(new THREE.AmbientLight(0xffffff))

    // Setup camera
    this.initCamera()

    // Add camera controls
    this.tbControls = new THREE.TrackballControls(this.camera, this.renderer.domElement)
    this.animate()

  }

  animate(){
    this.Graph.tickFrame()
    this.tbControls.update()
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(() => this.animate())
  }

  initCamera(){
    const camera = this.camera = new THREE.PerspectiveCamera()
    camera.far = 10000
    camera.aspect = this.width/this.height
    camera.updateProjectionMatrix()
    camera.lookAt(this.Graph.position)
    camera.position.z = 100
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




