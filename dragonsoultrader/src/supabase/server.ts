import { createClient } from '@supabase/supabase-js'

export const supabaseServer = createClient(
  process.env.PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)