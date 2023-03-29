import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export function Xbox({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/xbox-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.01, -0.1]} rotation={[-0.06, 0.05, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.Bump_material}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Plane_black}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.xbox_text}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Emission}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.Silver_Metal}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.Metal_grey}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Silver_Metal}
          />
        </group>
        <group
          position={[-0.69, 0.84, 0.2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.18, 0.11, 0.18]}
        >
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.Plane_black}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.Bump_material}
          />
        </group>
        <group
          position={[0.35, 0.42, 0.21]}
          rotation={[1.66, 0, 0]}
          scale={[0.18, 0.11, 0.18]}
        >
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials.Plane_black}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Bump_material}
          />
        </group>
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Buttons}
          position={[0, 0.84, 0.25]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.1, 0.03, 0.1]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Buttons}
          position={[0.73, 0.84, 0.23]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.1, 0.03, 0.1]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.XBOX_sign}
          position={[0, 1.14, 0.26]}
          rotation={[1.54, 0, 0.03]}
          scale={[0.1, 0.03, 0.1]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.Metal_grey}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.Metal_grey}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.BLUE}
          position={[0.54, 0.84, 0.27]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.19}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.material}
          position={[0.93, 0.84, 0.2]}
          rotation={[1.6, 0, 0]}
          scale={0.19}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.Yellow}
          position={[0.74, 1.03, 0.27]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.19}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials.Green}
          position={[0.73, 0.65, 0.22]}
          rotation={[1.69, -0.01, -0.07]}
          scale={0.19}
        />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials.Plane_black}
          position={[-0.34, 0.39, 0.17]}
          rotation={[1.74, -0.01, 0.06]}
          scale={[0.05, 0.07, 0.05]}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials.White}
          position={[-0.2, 0.84, 0.26]}
          scale={[1.26, 1.51, 2.38]}
        />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials.White}
          position={[0.19, 0.84, 0.26]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/xbox-transformed.glb");
export default Xbox;
