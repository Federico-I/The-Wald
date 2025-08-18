import react from "react";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lpanhxzavuwdrogyhjyb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYW5oeHphdnV3ZHJvZ3loanliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNzc5MDMsImV4cCI6MjA2NTk1MzkwM30.0FF8ScGPpYpY85N_186UvcTRRdtOc4a3FQ6di9ViEIk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;