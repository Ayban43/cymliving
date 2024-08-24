import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the login page
  redirect('/dashboard');
  return null; // This will never be reached, but it's here to satisfy TypeScript
}
