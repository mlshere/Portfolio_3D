import { lazy } from 'react';
import ClientOnly from './ClientOnly';

const StarsCanvas = lazy(() => import('./canvas/Stars'));

export default function CosmosBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <ClientOnly fallback={null}>
        <StarsCanvas />
      </ClientOnly>
    </div>
  );
}
