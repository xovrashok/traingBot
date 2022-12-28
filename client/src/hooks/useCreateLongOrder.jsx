import { sendRequest } from "./requests";
import useSWRMutation from 'swr/mutation'

function useCreateOrder() {
    return useSWRMutation('http://localhost:8000/orders', sendRequest, {suspense: true})
}

export default useCreateOrder;