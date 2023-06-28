"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { TextureLoader } from "three";

const count = 15;
const spacing = 3;

const calculateHeight = (x: number, z: number, transition: number) =>
  Math.sin((x + z + transition) * 2) * 3;

const calculatePositions = (): number[][] => {
  let positions: number[][] = [];

  for (let xi = 0; xi < count; xi++) {
    for (let zi = 0; zi < count; zi++) {
      const x = (xi - count / 2) * spacing;
      const z = (zi - count / 2) * spacing;
      positions.push([x, 0, z]);
    }
  }

  return positions;
};
const pointPositions = calculatePositions();

const ParticleGrid = () => {
  const dotTexture = useLoader(TextureLoader, "/dot.png");

  const { t } = useSpring({
    from: { t: 0 },
    to: { t: 2 * Math.PI },
    loop: true,
    config: {
      duration: 7500,
    },
  });

  return (
    <Canvas camera={{ position: [0, 0, -45], fov: 75 }}>
      <CameraControls />
      <pointLight position={[20, 20, 20]} />
      <group rotation={[15, 55, 0]}>
        {pointPositions.map(([x, _, z], i) => (
          <animated.points
            key={i}
            position={t.to((t) => [x, calculateHeight(x, z, t), z])}
          >
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([0, 0, 0]), 3]}
              />
            </bufferGeometry>
            <pointsMaterial
              map={dotTexture}
              size={1}
              color="#41FFF4"
              alphaTest={0.5}
            />
          </animated.points>
        ))}
      </group>
    </Canvas>
  );
};

export default ParticleGrid;
