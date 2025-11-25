import react from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useRecentBookings() {
  const [searchParam] = useSearchParams();

  const numDays = !searchParam.get("last") ? 7 : Number(searchParam.get("last"));

  return (
    <div>useRecentBookings</div>
  )
};
