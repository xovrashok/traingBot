import useSWR from 'swr'
import { fetcher } from "./requests";


const useGetPositions = () => {

  const { data, error, isLoading } = useSWR('http://localhost:8000/position', fetcher, { suspense: true })

  return {
    data,
    isLoading,
    error,
  };
}

export default useGetPositions;