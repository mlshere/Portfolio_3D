import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ reducedMotion }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (reducedMotion) return;
    ref.current.rotation.x -= Math.min(delta, 0.05) / 10;
    ref.current.rotation.y -= Math.min(delta, 0.05) / 15;
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