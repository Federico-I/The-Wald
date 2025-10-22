import react from "react";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  // Sort Data

  const SortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = SortByRaw.split("-");

  const sortBy = { field, direction};

  const {isPending, data: {data: bookings, error}} = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isPending, error, bookings };
};