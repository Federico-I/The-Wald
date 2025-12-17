import { useQuery } from '@tanstack/react-query';
import react from 'react';
import { getStaysTodayActivity } from '../../services/apiBookings';

export function useTodayActivity() {
  const {isLoading, data: stays} = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return (
    <div>useTodayActivity</div>
  );
}

