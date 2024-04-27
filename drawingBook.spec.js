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

describe("Negative test case for pageCount", () => {
  it("Should return 0 for n=-100 and p=3", () => {
    expect(pageCount(-100, 3)).equal(0);
  });
  it("Should return 0 for n=500 and p=-1", () => {
    expect(pageCount(500, -1)).equal(0);
  });
  it("Should return 0 for n=-99 and p=-121", () => {
    expect(pageCount(-99, -121)).equal(0);
  });
  it("Should return 0 for n=0 and p=0", () => {
    expect(pageCount(0, 0)).equal(0);
  });
  it("Should return 0 for n=50 and p=60", () => {
    expect(pageCount(50, 60)).equal(0);
  });
});
