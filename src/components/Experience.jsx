/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import VideoMaterial from "./VideoMaterial";
import { Suspense } from "react";

const Experience = () => {
  return (
    <Canvas
      camera={{
        position: [0, 1, 3],
      }}
    >
      <Plane position-y={0.5}>
        <Suspense fallback={<meshStandardMaterial wireframe={true} />}>
          <VideoMaterial src={"lion.mp4"} />
        </Suspense>
      </Plane>
      <Ground />
      <Environment preset="lobby" />
      <OrbitControls maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default Experience;
