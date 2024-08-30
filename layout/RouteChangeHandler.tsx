'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface RouteChangeHandlerProps {
  onRouteChange: () => void;
}

const RouteChangeHandler: React.FC<RouteChangeHandlerProps> = ({ onRouteChange }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onRouteChange();
  }, [pathname, searchParams]);

  return null;
};

export default RouteChangeHandler;