/**
 * Supabase Client (Disabled for frontend-only mode)
 * All auth and data are hardcoded on the frontend.
 */
export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
    signOut: async () => ({ error: null }),
  },
};

export function getServiceSupabase() {
  return null;
}

export default supabase;
