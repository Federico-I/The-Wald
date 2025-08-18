import react from "react";
import { toast } from "react-hot-toast";
import { deleteCabin } from "../../services/apiCabins";

export function useDeleteCabin() {

  const {isPending: isDeleting, mutate} = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.sucess("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
}