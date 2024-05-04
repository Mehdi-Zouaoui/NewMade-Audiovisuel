import Showcase from "../../components/products/Showcase";
import { createClient } from "../../utils/supabase/server";

async function getSpeakers(supabase) {
  try {
    const { data, error } = await supabase
      .from("speakers")
      .select()
      .order("id", { ascending: false });
    if (error) throw error;
    else return data;
  } catch (e) {}
}
export default async function Page() {
  const supabase = createClient();
  const speakers = await getSpeakers(supabase);
  console.log("speakers : ", speakers);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Showcase speakers={speakers} />
    </div>
  );
}
