import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components';
import { Cube } from './Cube';

export const Test = () => {
  
  const Section = styled.div`
  height: 100vh;
  width:100%;
  scroll-snap-align: center;
`;
  return (
    <Section>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
      </Canvas>
    </Section>
  )
}
