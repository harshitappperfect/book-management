import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
//we are only using the type information of ZodTypeProvider for type checking, but we don't need to bring in any runtime code. This is a TypeScript feature to optimize code and reduce bundle size.
// we're only bringing in type definitions, not actual code that runs at runtime.
// When you use import type, TypeScript tells the bundler (like Webpack or esbuild) to only include the type information and ignore the actual code during bundling.
//In this case, no code from fastify-type-provider-zod will be included in the final bundle, because the import type only tells TypeScript to check types, not to bring in runtime code.

import {createBookHandler, getBooksHandler, getBooksById} from "../controllers/books.controller"
import {createBookSchema} from "../schemas/books.schema"


export async function bookRoutes(server: FastifyInstance){
    server.withTypeProvider<ZodTypeProvider>().post(
        "/books",
        createBookHandler
    );
    server.withTypeProvider<ZodTypeProvider>().get(
        "/books",
        getBooksHandler
    )
    server.withTypeProvider<ZodTypeProvider>().get(
        "/books/:id",
        getBooksById
    )

}