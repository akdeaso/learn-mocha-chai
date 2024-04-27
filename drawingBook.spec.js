import { expect } from "chai";
import { pageCount } from "./drawingBook.js";

describe("Positive test case for pageCount", () => {
  it("Should return 1 for n=6 and p=2", () => {
    expect(pageCount(6, 2)).equal(1);
  });
  it("Should return 2 for n=10 and p=5", () => {
    expect(pageCount(10, 5)).equal(2);
  });
  it("Should return 1 for n=5 and p=3", () => {
    expect(pageCount(5, 3)).equal(1);
  });
  it("Should return 0 for n=5 and p=4", () => {
    expect(pageCount(5, 4)).equal(0);
  });
  it("Should return 58 for n=2059 and p=117", () => {
    expect(pageCount(2059, 117)).equal(58);
  });
});
