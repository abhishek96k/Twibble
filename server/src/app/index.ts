import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "../clients/db";

export async function initServer() {
  const app = express();

  app.use(bodyParser.json());

  // prismaClient.user.create({
  //   data: {

  //   }
  // })

  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        testHello: String
      }
    `,
    resolvers: {
      Query: {
        testHello: () => `First query from graphql`,
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}
