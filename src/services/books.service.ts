import prisma from "../database";

export const createBook = async ( data: {title: string, author: string, year: number , summary: string}) =>{
    return prisma.book.create({data})
}   

export const getBooks = async ()=>{
    return prisma.book.findMany();
}

export const getBooksById = async (id: number)=>{
    return prisma.book.findUnique({where: {id}})
}

export const updateBook = async (id: number, data: {title: string, author: string, year: number , summary: string})=>{
    return prisma.book.update({where: {id} , data})
}

export const deleteBook = async(id:number)=>{
    await prisma.book.delete({where :{id}})
    return {message: "Book deleted successfully"}
}