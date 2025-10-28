import react from "react";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiCabins";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {isPending, data: booking, error} = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(),
  });

  return { isPending, error, booking };
};