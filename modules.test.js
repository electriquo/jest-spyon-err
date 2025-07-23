import module from "./module.js"
import { describe, expect, it, jest } from "@jest/globals";

describe("use spyOn", () => {
  it("tests spyOn", async () => {
    const orig = await module.foo();
    console.log("in test 1:", orig);
    jest.spyOn(module, "foo").mockResolvedValue("mocked");
    const mocked = await module.foo();
    console.log("in test 2:", mocked);
    await module.bar(); // Expect "in bar: mocked"
    expect(mocked).toEqual("mocked");
  })
});