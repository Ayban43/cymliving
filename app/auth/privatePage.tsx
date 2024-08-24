import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

interface PrivatePageProps {
    children: ReactNode;
}

export default async function PrivatePage({ children }: PrivatePageProps) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect('/login');
    }

    return <>{children}</>;
}
