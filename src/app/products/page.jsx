import { cookies } from "next/headers";
import Showcase from "../../components/products/Showcase";
import { createClient } from "../../utils/supabase/server";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Showcase />
    </div>
  );
}
