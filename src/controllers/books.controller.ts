import type { FastifyRequest } from "fastify";

import {createBook, getBooks, getBooksById, updateBook} from "../services/books.service"


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

export const getBooksByIdHandler = async (request: FastifyRequest <{Params: {id: number}}>)=>{
    try {
        const {id} = request.params;
        return await getBooksById(Number(id));
    } catch (error) {
        console.log(error);
        throw(error)
    }
}

export const updateBooksHandler = async (request: FastifyRequest <{Params: {id: number} , Body: {title: string, author: string, year: number, summary: string}}>) => {
    try {
        const {id} = request.params;
        return await updateBook(Number(id), request.body);
    } catch (error) {
        console.log(error);
        throw(error);
    }
}