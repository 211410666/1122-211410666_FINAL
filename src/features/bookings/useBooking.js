import { useQuery } from "@tanstack/react-query";
import { getBooking } from '../../services/apiBookings';

export const useBooking = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['booking_66'],
    queryFn: getBooking(1),
  });
  return { data, isLoading, error };
};
