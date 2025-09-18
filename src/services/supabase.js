import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ermrbqngkuzunplrzrwg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVybXJicW5na3V6dW5wbHJ6cndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1OTQ4NzYsImV4cCI6MjA3MTE3MDg3Nn0.B-J3wXpg5w6w7BRqhi613kuUro4bnHnUW56TRm3mJL4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
