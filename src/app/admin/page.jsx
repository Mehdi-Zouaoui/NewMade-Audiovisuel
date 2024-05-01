import { createClient } from "../../utils/supabase/server";
export default function Admin() {
  const addSpeaker = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("speakers")
      .insert({ id: 1, name: "test" });
    if (data) console.log(data);
    if (error) console.log(error);
  };
  addSpeaker();
  return <div>Admin</div>;
}
