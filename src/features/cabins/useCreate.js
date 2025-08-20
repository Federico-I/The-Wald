import react from "react";


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