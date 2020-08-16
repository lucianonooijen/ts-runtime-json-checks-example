interface Quote {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
}

export default interface QuoteResponse {
    statusCode: number;
    quote: Quote
}
