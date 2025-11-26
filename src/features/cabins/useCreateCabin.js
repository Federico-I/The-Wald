import react from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEditCabinF } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
  mutationFn: CreateEditCabinF,
  onSuccess: () => {
    toast.success("New cabin successfully created");
    queryClient.invalidateQueries({ queryKey: ["cabin"] });
  },
  onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}