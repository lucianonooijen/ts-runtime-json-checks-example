/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */ 
// DO NOT EDIT - Generated using Aegis
import { Decoder, constant, optional, string, boolean, number, null_, undefined_, object, array, either, either3, either4, either5, either6, either7, either8, either9 } from "decoders";
export const quoteDecoder = object({
    _id: string,
    quoteText: string,
    quoteAuthor: string
});
export const quoteResponseDecoder = object({
    statusCode: number,
    quote: quoteDecoder
});