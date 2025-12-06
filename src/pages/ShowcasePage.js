import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, ScrollControls, useScroll, Scroll } from '@react-three/drei';
import * as THREE from 'three';
import './ShowcasePage.css';

const SplittingCore = () => {
  const scroll = useScroll();
  const shellRef1 = useRef();
  const shellRef2 = useRef();
  const coreRef = useRef();

  useFrame(() => {
    const offset = scroll.offset;
    const splitOffset = Math.sin(offset * Math.PI);

    if (shellRef1.current) {
      shellRef1.current.position.x = THREE.MathUtils.lerp(0, -1.5, splitOffset);
    }
    if (shellRef2.current) {
      shellRef2.current.position.x = THREE.MathUtils.lerp(0, 1.5, splitOffset);
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.01 * (1 + splitOffset * 5);
      const scale = 1 + splitOffset * 0.5;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <Icosahedron ref={coreRef} args={[0.5, 0]}>
        <meshStandardMaterial color="#ff00ff" wireframe={false} emissive="#ff00ff" emissiveIntensity={1} />
      </Icosahedron>
      <Icosahedron ref={shellRef1} args={[1, 0]}>
        <meshStandardMaterial color="#00aaff" wireframe clipIntersection={true} clipPlanes={[new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)]} />
      </Icosahedron>
      <Icosahedron ref={shellRef2} args={[1, 0]}>
        <meshStandardMaterial color="#00aaff" wireframe clipIntersection={true} clipPlanes={[new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)]} />
      </Icosahedron>
    </group>
  );
};

const ThreeScene = () => {
  const scroll = useScroll();
  useFrame((state) => {
    state.camera.position.z = 5 - scroll.offset * 10;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={100} />
      <SplittingCore />
    </>
  );
};

const ShowcasePage = () => {
  return (
    <motion.div
      className="showcase-3d-wrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={{ initial: { opacity: 0 }, in: { opacity: 1 }, out: { opacity: 0 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ScrollControls pages={3} damping={0.25}>
            <ThreeScene />
            <Scroll html>
              <div className="scroll-section">
                <h1>At the heart of BETA, lies the Core.</h1>
              </div>
              <div className="scroll-section">
                <h2>A self-assembling system of precision and intelligence.</h2>
              </div>
              <div className="scroll-section">
                <h1>Engineering Emotion from the inside out.</h1>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default ShowcasePage;
