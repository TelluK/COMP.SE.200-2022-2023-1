import capitalize from "../capitalize.js";

describe("Capitalize function test with words,", () => {
  const word_1 = "POTATO";
  it(`${word_1} should be Potato`, () => {
    const result = capitalize(word_1);
    const length = word_1.length;
    expect(result)
      .toBe("Potato")
      .toHaveLength(length)
      .not.toBeEmpty()
      .not.toBeNull();
  });

  const word_2 = "cArRoT";
  it(`${word_2} should be Carrot`, () => {
    const result = capitalize(word_2);
    const length = word_2.length;
    expect(result)
      .toBe("Carrot")
      .toHaveLength(length)
      .not.toBeEmpty()
      .not.toBeNull();
  });
  const word_3 = "onions AND cucumbers";
  it(`${word_3} should be Onions and cucumbers`, () => {
    const result = capitalize(word_3);
    const length = word_3.length;
    expect(result)
      .toBe("Onions and cucumbers")
      .toHaveLength(length)
      .not.toBeEmpty()
      .not.toBeNull();
  });
  const word_4 = "åland milk";
  it(`${word_4} should be Åland milk`, () => {
    const result = capitalize(word_4);
    const length = word_4.length;
    expect(result)
      .toBe("Åland milk")
      .toHaveLength(length)
      .not.toBeEmpty()
      .not.toBeNull();
  });
});

// describe('Capitalize function undefined test,', () => {

//   let WORD_1;
//   it(`${WORD_1} should be (undefined)`, () => {
//     const result = capitalize(WORD_1)
//     console.log(`capitalize(${WORD_1}), result: `, result)
//     expect(result)
//     .toBe("")

//   })

// })

// describe('Capitalize function null test,', () => {

//   let WORD_1 = null;
//   it(`${WORD_1} should be null`, () => {
//     const result = capitalize(WORD_1)
//     console.log(`capitalize(${WORD_1}), result: `, result)
//     expect(result)

//     .not.toBeString();

//   })

// })

describe("Capitalize function integer test,", () => {
  const integer_1 = 999;
  it(`${integer_1} should be 999`, () => {
    const result = capitalize(integer_1);
    expect(result).toBe("999");
  });
});

describe("Capitalize function array test,", () => {
  const Array_1 = ["potato", "Carrot", "milk"];
  it(`Array of ${Array_1} should be Potato,carrot,milk`, () => {
    const result = capitalize(Array_1);
    expect(result).toBe("Potato,carrot,milk");
  });

  const Array_2 = [];
  it(`${Array_2}Empty array should be empty`, () => {
    const result = capitalize(Array_2);
    expect(result).toBeEmpty().toHaveLength(0);
  });
});
