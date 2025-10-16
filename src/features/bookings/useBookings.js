import react from "react";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");

  const {isPending, data: bookings, error} = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isPending, error, bookings };
};