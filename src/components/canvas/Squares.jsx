import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Object3D, Vector2 } from 'three';

const COUNT = 64;
const SIDE = 8;
const IDLE_DELAY = 1;
const LINE_DURATION = 1.1;
const GRID_DURATION = 2.4;

function Squares() {
  const mesh = useRef(null);
  const { viewport, invalidate } = useThree();
  const pointer = useRef(new Vector2(0.55, 0.25));
  const previousMove = useRef(-Infinity);
  const visible = useRef(true);
  const positions = useMemo(() => Array.from({ length: COUNT }, () => new Vector2()), []);
  const velocities = useMemo(() => Array.from({ length: COUNT }, () => new Vector2()), []);
  const rotations = useMemo(() => new Float32Array(COUNT), []);
  const trail = useMemo(() => Array.from({ length: COUNT }, () => new Vector2(0.55, 0.25)), []);
  const transform = useMemo(() => new Object3D(), []);
  const target = useMemo(() => new Vector2(), []);

  useEffect(() => {
    const move = (event) => {
      if (event.pointerType === 'touch') return;
      pointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        1 - (event.clientY / window.innerHeight) * 2,
      );
      previousMove.current = performance.now() / 1000;
      invalidate();
    };
    const visibility = () => {
      visible.current = !document.hidden;
      if (visible.current) invalidate();
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('visibilitychange', visibility);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [invalidate]);

  useFrame((state, delta) => {
    if (!mesh.current || !visible.current) return;
    const age = performance.now() / 1000 - previousMove.current;
    const following = age < IDLE_DELAY;
    const time = state.clock.elapsedTime;
    const spacing = Math.min(viewport.width, viewport.height) * 0.035;
    const size = spacing * 0.52;
    const margin = spacing * (SIDE + 3) * 0.5;
    const centerX = Math.max(-viewport.width * 0.5 + margin, Math.min(viewport.width * 0.5 - margin, pointer.current.x * viewport.width * 0.5));
    const centerY = Math.max(-viewport.height * 0.5 + margin, Math.min(viewport.height * 0.5 - margin, pointer.current.y * viewport.height * 0.5));
    const dt = Math.min(delta, 1 / 30);
    const smoothing = 1 - Math.exp(-dt * 4);
    let unsettled = false;

    for (let index = 0; index < COUNT; index += 1) {
      const row = Math.floor(index / SIDE);
      const column = row % 2 === 0 ? index % SIDE : SIDE - 1 - index % SIDE;
      const gridX = (column - (SIDE - 1) / 2) * spacing;
      const gridY = ((SIDE - 1) / 2 - row) * spacing;
      const gridProgress = Math.min(1, Math.max(0, (age - IDLE_DELAY - LINE_DURATION - row * 0.08) / GRID_DURATION));
      const blend = gridProgress * gridProgress * (3 - 2 * gridProgress);
      const phase = index * 2.399;
      const drift = following ? 1 : 1 - blend;
      const windX = Math.sin(time * 0.65 + phase) * spacing * 1.4 * drift;
      const windY = Math.cos(time * 0.45 + phase) * spacing * 0.9 * drift;
      let targetX;
      let targetY;

      if (following) {
        const trailSmoothing = 1 - Math.exp(-dt * (index === 0 ? 10 : 7));
        trail[index].lerp(index === 0 ? pointer.current : trail[index - 1], trailSmoothing);
        targetX = trail[index].x * viewport.width * 0.5 + windX;
        targetY = trail[index].y * viewport.height * 0.5 + windY;
      } else {
        // A serpentine ordering folds the horizontal line into puzzle rows.
        const lineX = (index / (COUNT - 1) - 0.5) * spacing * (SIDE + 3);
        targetX = centerX + lineX * (1 - blend) + gridX * blend + windX;
        targetY = centerY + gridY * blend + windY;
        trail[index].copy(pointer.current);
      }

      target.set(targetX, targetY).sub(positions[index]);
      velocities[index].addScaledVector(target, 20 * dt).multiplyScalar(Math.exp(-7 * dt));
      positions[index].addScaledVector(velocities[index], dt);
      const rotationTarget = Math.sin(time * 0.5 + phase) * 0.45 * drift;
      rotations[index] += (rotationTarget - rotations[index]) * smoothing;
      if (gridProgress < 1 || target.lengthSq() > 0.000004 || velocities[index].lengthSq() > 0.000004 || Math.abs(rotations[index]) > 0.002) unsettled = true;
      transform.position.set(positions[index].x, positions[index].y, 0);
      transform.rotation.z = rotations[index];
      transform.scale.setScalar(size * (1 - drift * (0.15 + 0.15 * Math.sin(phase))));
      transform.updateMatrix();
      mesh.current.setMatrixAt(index, transform.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    if (following || unsettled) invalidate();
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, COUNT]} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="white" transparent opacity={0.065} depthWrite={false} />
    </instancedMesh>
  );
}

export default function SquareCanvas() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 10], zoom: 100 }}
      dpr={[1, 1.5]}
      frameloop="demand"
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      fallback={<div className="absolute right-[8%] top-[20%] h-40 w-40 border border-white/10" />}
    >
      <Squares />
    </Canvas>
  );
}
