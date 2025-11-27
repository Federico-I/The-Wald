import react from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings() {
  const [searchParam] = useSearchParams();

  const numDays = !searchParam.get("last") ? 7 : Number(searchParam.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const {isPending, data: stays} = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate), 
    queryKey: [ "stays", `last-${numDays}`],
  });


  return { isPending, stays};
}
