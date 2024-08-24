import { Navbar } from "@/components/admin-panel/navbar";
import { createClient } from '@/utils/supabase/server';

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export async function ContentLayout({ title, children }: ContentLayoutProps) {
  const supabase = createClient();

  // Fetch the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let fullName = null;
  let avatarUrl = null;

  // Fetch the full_name and avatar_url from v2_user_profiles using the user_id
  if (user) {
    const { data: profile, error } = await supabase
      .from('v2_user_profiles')
      .select('full_name, avatar_url')
      .eq('user_id', user.id)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
    } else {
      fullName = profile?.full_name || null;
      avatarUrl = profile?.avatar_url || null;
      console.log('User full name:', fullName);
      console.log('User avatar URL:', avatarUrl);
    }
  } else {
    console.log('No authenticated user found.');
  }

  return (
    <div>
      <Navbar title={title} user={{ fullName, email: user?.email ?? null, avatarUrl }} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
