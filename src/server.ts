import Fastify from "fastify";

import prisma from "./database";


const server = Fastify();


const start = async ()=>{
    try {
        await prisma.$connect();
        await server.listen({port: 3000})
        console.log(`server listening at http://localhost:3000`);
    } catch (error) {
        console.error(`Error starting server`);
        process.exit(1);
    }
}

start();