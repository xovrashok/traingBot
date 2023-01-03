import { useGetRequest } from './requests';

const usePosition = () => {
    const { data, error, isLoading, mutate } = useGetRequest('/position');

    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default usePosition;
