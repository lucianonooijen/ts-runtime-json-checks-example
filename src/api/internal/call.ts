import axios from 'axios';
import CallResponse from './CallResponse';

const call = async <T>(endpoint: string): Promise<CallResponse<T>>  => {
    try {
        const res = await axios.get(endpoint)
        if (res.status < 200 || res.status > 299) {
            return [null, "non 2xx status code"] as CallResponse<T>;
        }
        const data = res.data as T;
        return [data, ""] as CallResponse<T>;
    } catch (err) {
        return [null, err] as CallResponse<T>;
    }
};

export default call;
