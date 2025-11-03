import React from "react";
import { useQuery } from "@tanstack/react-query";

export function useSettings() {
  const {isLoading, error, data: settings} = useQuery({ 
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return {isLoading, error, settings}
};