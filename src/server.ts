import Fastify from "fastify";

import prisma from "./database";
import { bookRoutes } from "./routes/books.route";

const server = Fastify();

server.register(bookRoutes)


const start = async ()=>{
    try {
        await prisma.$connect();
        await server.listen({port: 3000})
        console.log(`server listening at http://localhost:3000`);
    } catch (error) {
        console.error(`Error starting server`, error);
        process.exit(1);
    }
}

start();