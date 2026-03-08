import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fwulpocpojcdgdpxubng.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3dWxwb2Nwb2pjZGdkcHh1Ym5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5MjgzNzYsImV4cCI6MjA4ODUwNDM3Nn0.6umItyIGoogdmpSYsPCoxAlmvbC_iZ_LPurv6BrlGDs";

export const supabase = createClient(supabaseUrl, supabaseKey);