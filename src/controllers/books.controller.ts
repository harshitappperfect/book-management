import type { FastifyRequest } from "fastify";

import {
  createBook,
  getBooks,
  getBooksById,
  updateBook,
  deleteBook,
} from "../services/books.service";

import { LogType, logWithDetails } from "../../customLogger";

export const createBookHandler = async (
  request: FastifyRequest<{
    Body: { title: string; author: string; year: number; summary: string };
  }>
) => {
  try {
    return await createBook(request.body);
  } catch (error) {
    logWithDetails(LogType.ERROR, "Error adding book");
    throw new Error("Unable to add book");
  }
};

export const getBooksHandler = async () => {
  try {
    return await getBooks();
  } catch (error) {
    logWithDetails(LogType.ERROR, "Error Fetching books");
    throw new Error("Unable to fetch books");
  }
};

export const getBooksByIdHandler = async (
  request: FastifyRequest<{ Params: { id: number } }>
) => {
  try {
    const { id } = request.params;
    return await getBooksById(Number(id));
  } catch (error) {
    logWithDetails(LogType.ERROR, "Error Fetching book by id");
    throw new Error("Unable to update book");
  }
};

export const updateBooksHandler = async (
  request: FastifyRequest<{
    Params: { id: number };
    Body: { title: string; author: string; year: number; summary: string };
  }>
) => {
  try {
    const { id } = request.params;
    return await updateBook(Number(id), request.body);
  } catch (error) {
    logWithDetails(LogType.ERROR, "Error updating book");
    throw new Error("Unable to fe3tch book");
  }
};

export const deleteBooksHandler = async (
  request: FastifyRequest<{ Params: { id: number } }>
) => {
  try {
    const { id } = request.params;
    return await deleteBook(Number(id));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
