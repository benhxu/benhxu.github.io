import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState, useMemo } from "react";
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
        child.castShadow = false;  // Disable shadows for mobile optimization
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  const memoizedScene = useMemo(() => scene, [scene]);

  return (
    <primitive
      ref={SFRef}
      object={memoizedScene}
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
        setScale([0.3, 0.3, 0.3]);
        setPosition([0, -0.5, 0]);
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

  const isMobile = window.innerWidth < 768;

  return (
    <Canvas
      className="w-full h-full bg-transparent z-10"
      shadows
      camera={{ position: [300, 175, -650], near: 0.1, far: 1000 }}
      dpr={[1, 2]} // Device pixel ratio for performance
      gl={{ antialias: true, preserveDrawingBuffer: false }} // Optimize WebGL
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 1]} intensity={0.5} />
        <SF scale={scale} position={position} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
          autoRotate={!isMobile} 
          autoRotateSpeed={1} 
        />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
};

export default SFCanvas;
