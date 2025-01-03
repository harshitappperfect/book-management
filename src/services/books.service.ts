import prisma from "../database";

export const createBook = async ( data: {title: string, author: string, year: number , summary: string}) =>{
    return prisma.book.create({data})
}   

export const getBooks = async ()=>{
    return prisma.book.findMany();
}

export const getBooksByIdService = async (id: number)=>{
    return prisma.book.findUnique({where: {id}})
}