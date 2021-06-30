import React, { useRef } from 'react';
import { RoundedBox } from '@react-three/drei';
import { Mesh, Vector3Tuple } from 'three';
import { useFrame } from '@react-three/fiber';
import { useHover, usePointer } from '../utils/sceneUtils';

interface TestBoxProps {
  onClick?(): void;

  position?: Vector3Tuple;

  color?: string;
  hoveredColor?: string;
}

export const TestBox: React.FC<TestBoxProps> = ({ hoveredColor, ...rest }) => {
  const box = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const boxCurrent = box?.current;
    if (boxCurrent) {
      boxCurrent.rotation.x += delta;
      boxCurrent.rotation.y += delta;
      boxCurrent.rotation.z += delta * Math.random();
      boxCurrent.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  const [bindings, hovered] = useHover();
  usePointer(hovered);

  return (
    <RoundedBox ref={box} args={[5, 5, 5]} radius={1} smoothness={4} {...rest} {...bindings}>
      <meshPhongMaterial color={hovered ? hoveredColor || `red` : `white`} />
    </RoundedBox>
  );
};
