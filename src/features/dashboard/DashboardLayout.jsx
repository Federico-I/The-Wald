import react from "react";
import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {

  const { bookings, isPending } = useRecentBookings();
  const { stays, confirmedStays, isPending: isPending2 } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if(isPending || isPending2 || isLoading3) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;