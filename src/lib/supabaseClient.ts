export interface SupabaseClientBoundary {
  readonly url: string;
  readonly publishableKey: string;
}

/**
 * Deliberately does not create a client until the approved backend contract is
 * available. Never put a service-role key in Vite/browser environment variables.
 */
export function getSupabaseClientBoundary(): SupabaseClientBoundary | undefined {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !publishableKey) return undefined;
  return { url, publishableKey };
}
