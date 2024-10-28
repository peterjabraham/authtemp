'use client';

import { useSession } from 'next-auth/react';
import { LoginButton, LogoutButton } from '@/components/auth/auth-buttons';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
  const { data: session, status } = useSession();
  const { toast } = useToast();

  useEffect(() => {
    if (status === 'error') {
      toast({
        title: 'Authentication Error',
        description: 'There was a problem with the authentication. Please try again.',
        variant: 'destructive',
      });
    }
  }, [status, toast]);

  if (status === 'loading') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-zinc-900 to-black text-white">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm">
        {session ? (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold mb-8">Welcome</h1>
            <p className="text-zinc-400 mb-4">Signed in as {session.user?.email}</p>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-bold font-inter mb-8">The Headline Lab</h1>
            <LoginButton />
          </div>
        )}
      </div>
    </main>
  );
}