"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Force a hard reload if we detect a session error
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'nextauth.message' && e.newValue?.includes('error')) {
        router.refresh();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [router]);

  return (
    <SessionProvider 
      refetchInterval={0} 
      refetchOnWindowFocus={true}
      refetchWhenOffline={false}
    >
      {children}
    </SessionProvider>
  );
}