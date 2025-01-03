import Fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

import prisma from "./database";
import { bookRoutes } from "./routes/books.route";

const server = Fastify();

server
  .withTypeProvider<ZodTypeProvider>()
  .setValidatorCompiler(validatorCompiler) // Use Zod's validation logic
  .setSerializerCompiler(serializerCompiler); // Use Zod's serialization logic

server.register(bookRoutes);

const start = async () => {
  try {
    await prisma.$connect();
    await server.listen({ port: 3000 });
    console.log(`server listening at http://localhost:3000`);
  } catch (error) {
    console.error(`Error starting server`, error);
    process.exit(1);
  }
};

start();
