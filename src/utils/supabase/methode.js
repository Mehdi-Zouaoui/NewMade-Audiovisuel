export async function fetchSpeakers(supabase) {
  try {
    const { data, error } = await supabase
      .from("speaker")
      .select()
      .order("id", { ascending: false });
    if (error) throw error;
    else return data;
  } catch (e) {}
}
