export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*")
};