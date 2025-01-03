import type { FastifyRequest } from "fastify";

import {createBook} from "../services/books.service"


export const createBookHandler = async (request: FastifyRequest <{Body: {title: string, author: string, year: number, summary: string}} >) =>{
   try {
    return await createBook(request.body)
   } catch (error) {
    console.log(error)
    throw error
   }
}