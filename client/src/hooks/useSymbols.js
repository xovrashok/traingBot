import { fetcher } from "./requests";
import useSWR from "swr";


function useSymbols() {

  const { data, error, isLoading } = useSWR('http://localhost:8000/markets', fetcher, { suspense: true })

  return {
    data,
    error,
    isLoading
  };
}


export default useSymbols;