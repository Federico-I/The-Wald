import react from "react";
import { toast } from "react-hot-toast";
import { deleteCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const {isPending: isDeleting, mutate} = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
}