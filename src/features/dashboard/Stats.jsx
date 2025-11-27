import react from 'react';
import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {

  const numBookings = bookings.lenght;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

  const checkins = confirmedStays.lenght;

  const occupation = confirmedStatys.reduce((acc, cur) => acc + cur.numNights, 0);

  return (
    <>
      <Stats title="Bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings}/>
      <Stats title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)}/>
      <Stats title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkins}/>
      <Stats title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar />} value={occupation}/>
    </>
  );
}

export default Stats;