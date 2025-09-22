import react from "react";
import { useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdateing } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success("Settings successfully created");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdateing, updateSetting };
};