import react from "react";
import { useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI };
import toast from "react-hot-toast";

export function useEditSetting() {
 const queryClient = useQueryClient();
 
 const { mutate: updateSetting, isPending: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateSetting };
}