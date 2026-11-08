import { lazy } from 'react';
import ClientOnly from './ClientOnly';

const Tilt = lazy(() => import('react-tilt').then(({ Tilt }) => ({ default: Tilt })));

export default function ClientTilt({ children, className, options }) {
  return (
    <ClientOnly fallback={<div className={className}>{children}</div>}>
      <Tilt className={className} options={options}>{children}</Tilt>
    </ClientOnly>
  );
}
