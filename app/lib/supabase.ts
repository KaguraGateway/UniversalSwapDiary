import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
    process.env.IN_CONTAINER_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    {
        auth: {
            persistSession: process.env.NODE_ENV === "production"
        }
    }
)
