export async function fetchSpeakers(supabase) {
  try {
    const { data, error } = await supabase
      .from("speakers")
      .select()
      .order("id", { ascending: false });
    if (error) throw error;
    else return data;
  } catch (e) {}
}
export async function fetchMicros(supabase) {
  try {
    const { data, error } = await supabase
      .from("micros")
      .select()
      .order("id", { ascending: false });
    if (error) throw error;
    else return data;
  } catch (e) {}
}

export async function createSpeaker(supabase, speaker) {
  try {
    const { data, error } = await supabase.from("speakers").insert({
      ...speaker,
    });

    if (error) throw error;
  } catch (error) {
    console.log(error.message);
  }
}
export async function createMicro(supabase, micro) {
  try {
    const { data, error } = await supabase.from("micros").insert({
      ...micro,
    });

    if (error) throw error;
  } catch (error) {
    console.log(error.message);
  }
}
