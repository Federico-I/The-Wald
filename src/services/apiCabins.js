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

export async function CreateCabinForm( newCabin ) {
  const { data, error } = await supabase.from("cabins").insert([{ some_column: "someValue", other_column: "otherValue"}])

  if(error)
  {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
};

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);

    
  if(error)
  {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
};