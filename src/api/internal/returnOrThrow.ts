import CallResponse from "./CallResponse";
import { Decoder } from "decoders";
import { guard } from "decoders";

const returnOrThrow = <T>(response: CallResponse<T>, decoder: Decoder<T>) => {
    const [res, err] = response;
    if (err != "") {
        throw new Error(err);
    }

    // Validate type
    const typeChecker = guard(decoder)
    typeChecker(res) // Throws if res does not satisfy type T

    return res;
};

export default returnOrThrow;
