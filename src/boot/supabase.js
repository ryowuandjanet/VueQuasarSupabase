import { createClient } from '@supabase/supabase-js'

// Project Configuration >> URL
const supabaseUrl = 'https://uuyxsjjbvasxngbxmcjq.supabase.co'

// Project API keys >> anon public
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1eXhzampidmFzeG5nYnhtY2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTkyMDksImV4cCI6MjA0NDgzNTIwOX0.jPU_Sb9-pZeuczVdWzcNBFxYhMV22sSr5wFwBMdqghs'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase() {
  return { supabase }
}
