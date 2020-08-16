import QuoteResponse from "../types/quoteResponse";
import call from "../internal/call";
import returnOrThrow from "../internal/returnOrThrow";
import { quoteResponseDecoder } from "../internal/decoders";

const getQuote = async (shouldFail: boolean): Promise<QuoteResponse> => {
    const quoteRes = await call<QuoteResponse>("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    if (shouldFail) {
        // @ts-ignore | It should fail
        quoteRes[0].quote._id = 14
    }
    // @ts-ignore | Ignore the cannot be a number error if shouldFail = true for demo
    return returnOrThrow(quoteRes, quoteResponseDecoder);
}

export default getQuote;
