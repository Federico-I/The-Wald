import react from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin(){
  const navigate = useNavigate();

  const { mutate: login, isPending } =
  useMutation({
    mutationFn: ({email, password}) => loginApi({
      email, password}),
      onSuccess: () => {
        navigate("/dashboard");
      },
      onError: (err) => {
        toast.error("Provided email or password are incorrect");
      },
  });

  return { login, isLoading };
}