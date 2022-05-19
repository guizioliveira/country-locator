import sellTickets from "./algorithm";

describe("test avengers algorithm", () => {
  it("should return yes if there is only one person with 25 dollars", () => {
    const response = sellTickets([25]);
    expect(response).toBe("YES");
  });
  it("should return yes if there is change", () => {
    const response = sellTickets([25, 25, 50]);
    expect(response).toBe("YES");
  });
  it("should return no if there is no change", () => {
    const response = sellTickets([25, 100]);
    expect(response).toBe("NO");
  });
  it("should return no if there is no change", () => {
    const response = sellTickets([25, 25, 50, 50, 100]);
    expect(response).toBe("NO");
  });
  it("should return yes if there is change", () => {
    const response = sellTickets([25, 25, 25, 25, 50, 50, 50, 100]);
    expect(response).toBe("YES");
  });
});
