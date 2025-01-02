import { test } from "@/graphql/resolvers/mutations/test";

describe("Hello Mutation", () => {
  it("Should call say hello mutation with word input", () => {
    expect(test({}, { word: "hello" })).toBeDefined();
  });
});
