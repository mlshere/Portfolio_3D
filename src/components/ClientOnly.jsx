import { Suspense, useEffect, useState } from 'react';

export default function ClientOnly({ children, fallback }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <Suspense fallback={fallback}>{children}</Suspense> : fallback;
}
