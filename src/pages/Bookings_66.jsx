import { useBooking } from "../features/bookings/useBooking";
import Spinner from "../ui/Spinner";
import { getBooking } from "../services/apiBookings";
import { useEffect } from "react";

const Bookings_66 = () => {

  useEffect(() => {
    getBooking(1).then((data) => console.log('booking(1) data', data));
  })
  const { data, isLoading } = useBooking();
  if(isLoading) return <Spinner/>
  console.log(data);

  return <>Bookings_xx page</>;

};

export default Bookings_66;
