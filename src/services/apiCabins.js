import react from "react";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if(error)
  {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

export async function deleteCabin(id) {};