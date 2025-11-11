import { currentUser } from "@/api/AuthAPI";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["currentUser"],
    queryFn: currentUser,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true
  });

  return { data, isLoading, isError };
};
