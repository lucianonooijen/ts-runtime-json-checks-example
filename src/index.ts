import getQuote from "./api/calls/getQuote";

const SHOULD_FAIL = true

const run = async () => {
    console.log(`SHOULD_FAIL = ${SHOULD_FAIL}`);
    const quote = await getQuote(SHOULD_FAIL);
    console.log(quote)
};

run();
