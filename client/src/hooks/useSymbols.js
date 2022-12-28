import useSWR from 'swr';

const useSymbols = () => {
  const { data, error, isLoading } = useSWR('/markets');

  return {
    data,
    error,
    isLoading,
  };
};

export default useSymbols;
