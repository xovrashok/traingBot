import { useGetRequest } from './requests';

const usePosition = () => {
    const { data, error, isLoading } = useGetRequest('/position');

    return {
        data,
        error,
        isLoading,
    };
};

export default usePosition;