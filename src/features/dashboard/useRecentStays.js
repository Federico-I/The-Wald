import react from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../services/apiBookings';

export function useRecentStays() {
  const [searchParam] = useSearchParams();

  const numDays = !searchParam.get("last") ? 7 : Number(searchParam.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const {isPending, data: bookings} = useQuery({
    queryFn: () => getStaysAfterDate(queryDate), 
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isPending, bookings };
}
