import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Xbox from "./Xbox";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Game = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Xbox />
          <OrbitControls enableZoom={true} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>We design products for gaming</Desc>
    </>
  );
};

export default Game;
