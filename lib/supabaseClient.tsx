import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Ensure environment variables are defined
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Create the Supabase client with type annotation
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
