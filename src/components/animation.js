import React from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";


function Animation ({
  noiseStepFactor = 0.1,
  noiseScaleFactor = 20,
  pathLength = 300,
  startRadius = 42,
  radiusStep = 2,
  nCircles = 50,
  startHue = 0,
  hueFactor = 1,
  cameraZ = 150
}) {
  const domRef = React.useRef();
  const animRef = React.useRef();

  React.useEffect(() => {
    if (domRef.current) {
      domRef.current.style.height = "100%";
      domRef.current.style.width = "100%";
      domRef.current.style.zIndex = "-1";
      domRef.current.style.pointerEvents = "none";
      animRef.current = new ThreeAnim({
        canvas: domRef.current,
        noiseScaleFactor,
        noiseStepFactor,
        pathLength,
        startRadius,
        radiusStep,
        nCircles,
        startHue,
        hueFactor,
        cameraZ
      });
      animRef.current.init();
    }
    return () => {
      animRef.current.dispose();
    };
  }, [domRef]);

  React.useEffect(() => {
    if (animRef.current) {
      animRef.current.startHue = startHue;
      animRef.current.hueFactor = hueFactor;
      animRef.current.updateColors();
    }
  }, [startHue, hueFactor]);

  return <canvas ref={domRef}/>;
}

class ThreeAnim {

  constructor ({
    canvas,
    noiseStepFactor,
    noiseScaleFactor,
    pathLength,
    startRadius,
    radiusStep,
    nCircles,
    startHue,
    hueFactor,
    cameraZ
  }) {
    this.canvas = canvas;
    this.noiseStepFactor = noiseStepFactor;
    this.noiseScaleFactor = noiseScaleFactor;
    this.pathLength = pathLength;
    this.startRadius = startRadius;
    this.radiusStep = radiusStep;
    this.nCircles = nCircles;
    this.startHue = startHue;
    this.hueFactor = hueFactor;
    this.cameraZ = cameraZ;
  }

  init () {
    // remove all objects if they exist
    while (this.scene && this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
    this._initThree();
    this._resize();
    this._registerListeners();
    for (let i = 0; i < this.nCircles; i++) {
      const c = this._initCircle(this.startRadius + i * this.radiusStep, 0);
      this.scene.add(c);
    }
    this._render();
  }

  _registerListeners () {
    window.addEventListener("resize", () => this._resize());
  }

  _resize () {
    if (this._resizeRendererToDisplaySize()) {
      this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
  }

  dispose () {
    this.renderer.dispose();
  }

  _resizeRendererToDisplaySize () {
    const canvas = this.renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvas.clientWidth * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      this.renderer.setSize(width, height, false);
    }
    return needResize;
  }

  _initThree () {
    // Create a renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      premultipliedAlpha: false
    });
    // WebGL background color
    // this.renderer.setClearColor("#000000", 1);
    // Setup a camera
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.01, 1000);
    this.camera.position.set(0, 0, this.cameraZ);
    this.camera.lookAt(new THREE.Vector3());
    // Setup a scene
    this.scene = new THREE.Scene();
    // Setup clock
    this.clock = new THREE.Clock(true);
    // Init noise instance
    this.noise = new ImprovedNoise();
  }

  updateColors () {
    for (let i = 0; i < this.scene.children.length; i++) {
      this.scene.children[i].material.setValues({
        color: new THREE.Color(`hsl(${(i + this.startHue) * this.hueFactor}, 100%, 50%)`)
      });
    }
  }

  _initCircle (r, y = 0) {
    const pathArray = new Float32Array((this.pathLength + 1) * 3);
    let dAngle = (Math.PI * 2) / this.pathLength, i = 0;
    for (let angle = 0; angle <= Math.PI * 2; angle += dAngle) {
      pathArray[i] = Math.cos(angle) * r;
      pathArray[i + 1] = Math.sin(angle) * r;
      pathArray[i + 2] = y;
      i += 3;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(pathArray, 3));
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(`hsl(${(i / 3 + this.startHue) * this.hueFactor}, 100%, 50%)`)
    });
    return new THREE.Line(geometry, material);
  }

  _render () {
    for (let i = 0; i < this.scene.children.length; i++) {
      const c = this.scene.children[i];
      const pos = c.geometry.attributes.position.array;
      c.geometry.attributes.position.needsUpdate = true;
      for (let j = 0; j < pos.length; j += 3) {
        pos[j + 2] = this.noise.noise(
          pos[j] * this.noiseStepFactor,
          pos[j + 1] * this.noiseStepFactor,
          this.clock.getElapsedTime()
        ) * this.noiseScaleFactor;
      }
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._render.bind(this));
  }

}

export default Animation;
