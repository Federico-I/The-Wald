import react from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
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

  // Pagination
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);


  // Query
  const {isPending, data: {data: bookings, count}, error} = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-fetching
  QueryClient.prefetchQuery()
  return { isPending, error, bookings, count };
};