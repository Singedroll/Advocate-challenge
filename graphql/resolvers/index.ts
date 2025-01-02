import { Test } from "mocha";
import { sayHello } from "./mutations/say-hello";
import { helloQuery } from "./queries/hello-query";
import { test } from "./mutations/test";

export const resolvers = {
  Query: {
    helloQuery,
  },
  Mutation: {
    sayHello,
    test,
  },
};
