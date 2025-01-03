import type { FastifyRequest } from "fastify";

import {createBook, getBooks, getBooksByIdService} from "../services/books.service"


export const createBookHandler = async (request: FastifyRequest <{Body: {title: string, author: string, year: number, summary: string}} >) =>{
   try {
    return await createBook(request.body)
   } catch (error) {
    console.log(error)
    throw error
   }
}

export const getBooksHandler = async ()=>{
    try {
        return await getBooks()
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getBooksById = async (request: FastifyRequest <{Params: {id: number}}>)=>{
    try {
        const {id} = request.params;
        return await getBooksByIdService(Number(id));
    } catch (error) {
        console.log(error);
        throw(error)
    }
}