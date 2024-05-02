import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  //Next.js way to handles cookies with the new App Router.
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      //  
      cookies: {
        //How to get cookie
        get(name) {
          return cookieStore.get(name)?.value;
        },
        //How to set cookie
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        //How to remove cookie 
        remove(name, options) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
