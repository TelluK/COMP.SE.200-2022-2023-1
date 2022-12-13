import drop from "../drop";

describe("Drop function test 1", () => {
  it("Drop from positive numbers [1, 2, 3], should be [2, 3] ", () => {
    const result = drop([1, 2, 3]);
    expect(result).toStrictEqual([2, 3]).toBeArray().not.toBeNull();
  });
  it("Drop two numbers from negative numbers [-1, -2, -3], should be [-3] ", () => {
    const result = drop([-1, -2, -3], 2);
    expect(result).toStrictEqual([-3]).toBeArray().not.toBeNull();
  });

  it("Drop from undefined numbers [undefined, -2, -3], should be [-2, -3] ", () => {
    let undef;
    const result = drop([undef, -2, -3]);
    expect(result).toStrictEqual([-2, -3]).toBeArray().not.toBeNull();
  });

  it("Drop from empty array [], should be [] ", () => {
    let array = [];
    const result = drop(array);
    expect(result).toStrictEqual([]).toBeArray();
  });

  it("Drop from empty array [] and undefined length, should be [] ", () => {
    let array = [];
    let undef;
    const result = drop(array, undef);
    expect(result).toStrictEqual([]).toBeArray();
  });

  it("Drop from array [1, 2, 3] and undefined length, should be [2, 3] ", () => {
    let array = [1, 2, 3];
    let undef;
    const result = drop(array, undef);
    expect(result).toStrictEqual([2, 3]).toBeArray();
  });

  it("Drop from array [1, 2, 3] and n = -1, should be [1, 2, 3] ", () => {
    let array = [1, 2, 3];
    const n = -1;
    const result = drop(array, n);
    expect(result).toStrictEqual([1, 2, 3]).toBeArray();
  });

  it("Drop from empty array [] and n = 3, should be [] ", () => {
    let array = [];
    const result = drop(array, 3);
    expect(result).toStrictEqual([]).toBeArray();
  });

  it("Drop from empty array [] and n = 0, should be [] ", () => {
    let array = null;
    const n = 0;
    const result = drop(array, n);
    expect(result).toStrictEqual([]).toBeArray();
  });

  it("Drop from empty array [1, 2] and undefined length, should be [] ", () => {
    let array = [1, 2];
    const result = drop(array, 3);
    expect(result).toStrictEqual([]).toBeArray();
  });

  it("Drop from array [1, 2, 3] and undefined length, should be [2, 3] ", () => {
    let array = [1, 2, 3];
    let undef;
    const result = drop(array, undef);
    expect(result).toStrictEqual([2, 3]).toBeArray();
  });

  it("Drop from empty arrays [], [1,2,3], should be [] ", () => {
    const result = drop([]);
    expect(result).toStrictEqual([]).toBeArray();
  });
});
