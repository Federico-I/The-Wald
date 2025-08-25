import react from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateEditCabinF } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
  mutationFn: CreateEditCabinF,
  onSuccess: () => {
    toast.success("New cabin successfully created");
    queryClient.invalidateQueries({ queryKey: ["cabin"] });
    reset();
  },
  onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}