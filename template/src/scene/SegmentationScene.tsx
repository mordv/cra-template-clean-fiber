import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { ThemeContext } from 'styled-components';

export const SceneContent: React.FC = ({ children }) => (
  <>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <OrbitControls />
    {children}
  </>
);

export const ApplicationScene: React.FC = ({ children }) => {
  const ContextBridge = useContextBridge(ThemeContext);

  return (
    <Canvas
      style={{ background: `#222222` }}
      camera={{ fov: 75, position: [0, 50, 0], near: 10, far: 200, up: [0, 0, 1] }}
    >
      <ContextBridge>
        <SceneContent>{children}</SceneContent>
      </ContextBridge>
    </Canvas>
  );
};
