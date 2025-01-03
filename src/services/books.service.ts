import prisma from "../database";

export const createBook = async ( data: {title: string, author: string, year: number , summary: string}) =>{
    return prisma.book.create({data})
}   