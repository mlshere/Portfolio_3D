import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Vector2 } from "three";

const Stars = ({ reducedMotion }) => {
  const ref = useRef();
  const pointer = useRef(new Vector2());
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useEffect(() => {
    pointer.current.set(0, 0);
    if (reducedMotion) return;
    const move = (event) => {
      if (event.pointerType === 'touch') return;
      pointer.current.set(
        event.clientX / window.innerWidth * 2 - 1,
        1 - event.clientY / window.innerHeight * 2,
      );
    };
    const reset = () => pointer.current.set(0, 0);
    const leave = (event) => {
      if (!event.relatedTarget) reset();
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', leave);
    window.addEventListener('blur', reset);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', reset);
    };
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (reducedMotion) {
      state.camera.position.set(0, 0, 1);
      state.camera.lookAt(0, 0, 0);
      return;
    }
    const dt = Math.min(delta, 0.05);
    const smoothing = 1 - Math.exp(-dt * 3);
    state.camera.position.x += (pointer.current.x * 0.18 - state.camera.position.x) * smoothing;
    state.camera.position.y += (pointer.current.y * 0.12 - state.camera.position.y) * smoothing;
    state.camera.lookAt(0, 0, 0);
    ref.current.rotation.x -= dt / 10;
    ref.current.rotation.y -= dt / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      media.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  return (
    <div className='w-full h-full'>
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}
        frameloop={visible && !reducedMotion ? 'always' : 'demand'}
        gl={{ alpha: true, powerPreference: 'low-power' }}>
        <Suspense fallback={null}>
          <Stars reducedMotion={reducedMotion} />
        </Suspense>

      </Canvas>
    </div>
  );
};

export default StarsCanvas;