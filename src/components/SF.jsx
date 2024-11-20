import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import SFScene from "../assets/3d/scene.glb";
import CanvasLoader from "./Loader";

const SF = ({ scale, position }) => {
  const SFRef = useRef();
  const { scene, animations } = useGLTF(SFScene);
  const { actions } = useAnimations(animations, SFRef);

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;

        if (child.material.map) {
          child.material.map.needsUpdate = true;

           // Update texture maps if they exist
           if (child.material.map) child.material.map.needsUpdate = true;
           if (child.material.normalMap) child.material.normalMap.needsUpdate = true;
           if (child.material.roughnessMap) child.material.roughnessMap.needsUpdate = true;
           if (child.material.metalnessMap) child.material.metalnessMap.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={SFRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={[0, 2.2, 0]}
    />
  );
};

const SFCanvas = () => {
  const [scale, setScale] = useState([0.5, 0.5, 0.5]);
  const [position, setPosition] = useState([0, -1.5, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.2, 0.2, 0.2]);
        setPosition([0, -0.5, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([0.3, 0.3, 0.3]);
        setPosition([0, -0.7, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([0.4, 0.4, 0.4]);
        setPosition([0, -1, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([0.45, 0.45, 0.45]);
        setPosition([0, -1.2, 0]);
      } else {
        setScale([0.5, 0.5, 0.5]);
        setPosition([0, -1.5, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      className="w-full h-screen bg-transparent z-10"
      shadows
      camera={{ position: [300, 175, -650], near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 1]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={1} />
        <pointLight position={[10, 10, -10]} intensity={1} />
        <spotLight position={[0, 50, 50]} angle={0.3} penumbra={1} intensity={1} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />

        <SF scale={scale} position={position} />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={1} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
};

export default SFCanvas;