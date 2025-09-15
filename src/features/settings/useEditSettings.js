import react from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CreateEditCabinF } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditSettings() {
 const queryClient = useQueryClient();
 
 const { mutate: editSettings, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => CreateEditCabinF(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editSettings };
}