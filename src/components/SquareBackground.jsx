import { lazy, useEffect, useState } from 'react';
import ClientOnly from './ClientOnly';

const SquareCanvas = lazy(() => import('./canvas/Squares'));

const StaticSquares = () => (
  <div className="absolute right-[8%] top-[20%] grid grid-cols-8 gap-1 opacity-[0.06]">
    {Array.from({ length: 64 }, (_, index) => (
      <span key={index} className="h-3 w-3 bg-white sm:h-5 sm:w-5" />
    ))}
  </div>
);

export default function SquareBackground() {
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)');
    const update = () => setInteractive(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {interactive ? (
        <ClientOnly fallback={<StaticSquares />}>
          <SquareCanvas />
        </ClientOnly>
      ) : <StaticSquares />}
    </div>
  );
}
