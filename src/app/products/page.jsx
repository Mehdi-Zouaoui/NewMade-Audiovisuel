import Showcase from "../../components/products/Showcase";
import { fetchMicros } from "../../utils/supabase/methode";
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
  const micros = await fetchMicros(supabase);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Showcase speakers={speakers} micros={micros} />
    </div>
  );
}
