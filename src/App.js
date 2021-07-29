import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useTexture, Html, OrbitControls, useGLTF } from "@react-three/drei";

import "./App.css";

function Jp() {
  const url = "jp.glb";
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      position={[0, 2.26, 0]}
      rotation={[0, 0, (10 * Math.PI) / 180]}
    />
  );
}

function SkyBox() {
  const url = "eQ9y7xBeY4-new.jpg";
  const texture = useTexture(url);
  const { scene } = useThree();
  scene.background = texture;
  return null;
}
// "Environmentally & friendly" nuclear sewage
const Earth = () => {
  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[(-54 * Math.PI) / 180, (128 * Math.PI) / 180, 0]}
      castShadow
    >
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        specular={0x333333}
        shininess={5}
        map={useTexture("earth_atmos_2048_hfs.jpg")}
        specularMap={useTexture("earth_specular_2048.jpg")}
        normalMap={useTexture("earth_normal_2048.jpg")}
        normalScale={new THREE.Vector2(0.85, 0.85)}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      {/* <h2>WTF is that 14.700?</h2> */}
      <h2>Olympic referee: Landing on the earth, Perfect! 14.700</h2>
      <h1>Tokyo2020 shame on you!</h1>
      <Canvas>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <directionalLight position={[10, 0, -5]} intensity={1} />
        <Suspense fallback={<Html>Loading..</Html>}>
          <group rotation={[(45 * Math.PI) / 180, 0, 0]}>
            <Jp />
            <Earth />
          </group>
          <SkyBox />
        </Suspense>
        <OrbitControls autoRotate={true} minDistance={3} maxDistance={6} />
      </Canvas>
      <h2 className="about">Diss by 鼻毛分叉105度 from Bilibili</h2>
    </>
  );
}

export default App;
