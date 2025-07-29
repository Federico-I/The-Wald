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
  const imageName = `${Math.random()}-${newCabin.imageName.name}`

  // URL

  // 1) Create Cabin
  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if(error)
  {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  // 2) Upload Image

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