import react from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin(){
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } =
  useMutation({
    mutationFn: ({email, password}) => loginApi({
      email, password}),
      onSuccess: (user) => {
        queryClient.setQueriesData(["user"], user);
        navigate("/dashboard", { replace: true });
      },
      onError: (err) => {
        toast.error("Provided email or password are incorrect");
      },
  });

  return { login, isLoading };
}