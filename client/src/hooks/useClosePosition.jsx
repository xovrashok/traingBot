import { sendRequest } from "./requests";
import useSWRMutation from "swr/mutation";


const useClosePositions = () => {
    return useSWRMutation('http://localhost:8000/position', sendRequest, {suspense: true})
}

export default useClosePositions;