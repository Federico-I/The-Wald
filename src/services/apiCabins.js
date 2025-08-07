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

export async function CreateEditCabinF( newCabin, id ) {
  const imageName = `${Math.random()}-${newCabin.imageName.name}`.replaceAll("/", "");

  // use supabe URL - still check path
  const imagePath = `${supabaseURL}/storage/v1/object/public/cabin-images/${imageName}`

  // URL

  // 1) Create/edit Cabin
  let query = supabase.from("cabins");
  
  // A) CREATE
  if (!id)
    query.insert([{...newCabin, image: imagePath}]);
  
  // B) EDIT

  
  const { data, error } = await query.select().single();
  
  if(error)
  {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  // 2) Upload Image - provided by api cloud site
  const { error: storageError } = await supabase.storage.from("cabin-images").upload(imageName, newCabin.image);

  // 3) if error uploading - delete image
  if(storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded and cabin was not created")
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