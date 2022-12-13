import toNumber from "../toNumber";

describe("toNumber function test 1", () => {
  it('add string "4.2", result should be 4.2', () => {
    const result = toNumber("4.2");
    expect(result).toBe(4.2);
  });

  it("add 4.2, result should be 4.2", () => {
    const result = toNumber(4.2);
    expect(result).toBe(4.2);
  });

  it('add string "-4.2", result should be -4.2', () => {
    const result = toNumber("-4.2");
    expect(result).toBe(-4.2);
  });

  it("add undefined, result should be 0", () => {
    const result = toNumber("");
    expect(result).toBe(0);
  });

  it("add Infinity, result should be Infinity", () => {
    const result = toNumber(Infinity);
    expect(result).toBe(Infinity);
  });
});

describe("toNumber function test 2 -MIN and MAX values", () => {
  it("add Number.MIN_VALUE, result should be 5e-324", () => {
    const result = toNumber(Number.MIN_VALUE);
    expect(result).toBe(5e-324);
  });

  it("add Number.MAX_VALUE, result should be 1.7976931348623157e+308", () => {
    const result = toNumber(Number.MAX_VALUE);
    expect(result).toBe(1.7976931348623157e308);
  });
});

describe("toNumber function test 3 -Symbol, Object, Function", () => {
  it("add Symbol, result should be NaN", () => {
    const sym = Symbol("foo");
    const result = toNumber(sym);
    expect(result).toBe(NaN);
  });
  it("add Object, result should be NaN", () => {
    const obj = Object("foo");
    const result = toNumber(obj);
    expect(result).toBe(NaN);
  });

  it("add Object, result should be NaN", () => {
    const obj = { type: "food", value: Object };
    const result = toNumber(obj);
    expect(result).toBe(NaN);
  });

  it("add function, result should be NaN", () => {
    const func = () => {
      return true;
    };
    const result = toNumber(func);
    expect(result).toBe(NaN);
  });

  it("add Function, result should be NaN", () => {
    const func = Function;
    const result = toNumber(func);
    expect(result).toBe(NaN);
  });

  it("add boolean, result should be NaN", () => {
    const t = true;
    const result = toNumber(t);
    expect(result).toBe(1);
  });

  it("add Number, result should be NaN", () => {
    const num = Number;
    const result = toNumber(num);
    expect(result).toBe(NaN);
  });

  it("add Array, result should be NaN", () => {
    const array = [1, 2, 3];
    const result = toNumber(array);
    expect(result).toBe(NaN);
  });

  it("add null, result should be NaN", () => {
    const empty = null;
    const result = toNumber(empty);
    expect(result).toBe(0);
  });

  it("add {}, result should be NaN", () => {
    const empty = {};
    const result = toNumber(empty);
    expect(result).toBe(NaN);
  });

  it("add binary, result should be NaN", () => {
    const bin = Number(42).toString(2);
    const result = toNumber(bin);
    expect(result).toBe(101010);
  });

  it("add binary, result should be NaN", () => {
    const bin = "101010";
    const result = toNumber(bin);
    expect(result).toBe(101010);
  });
});
