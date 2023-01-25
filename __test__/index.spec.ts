import { getDataType } from "../src";

describe("Test Data Type Value", () => {
  test("Get Object", () => {
    class TestClass {}

    expect(getDataType({})).toBe("Object");
    expect(getDataType(Object.create(null))).toBe("Object");
    expect(getDataType(new Proxy({}, {}))).toBe("Object");
    expect(getDataType(new TestClass())).toBe("Object");
  });

  test("Get Array", () => {
    expect(getDataType([])).toBe("Array");
    expect(getDataType(new Proxy([], {}))).toBe("Array");
  });

  test("Get Number", () => {
    expect(getDataType(123)).toBe("Number");
    expect(getDataType(NaN)).toBe("Number");
    expect(getDataType(Infinity)).toBe("Number");
  });

  test("Get String", () => {
    expect(getDataType("123")).toBe("String");
  });

  test("Get Boolean", () => {
    expect(getDataType(false)).toBe("Boolean");
  });

  test("Get Undefined", () => {
    expect(getDataType(undefined)).toBe("Undefined");
  });

  test("Get Null", () => {
    expect(getDataType(null)).toBe("Null");
  });

  test("Get Promise", () => {
    expect(getDataType(new Promise(() => {}))).toBe("Promise");
    expect(getDataType(Promise.resolve(123))).toBe("Promise");
  });

  test("Get Function/AsyncFunction", () => {
    function testFn() {}

    expect(getDataType(testFn)).toBe("Function");
    expect(getDataType(() => {})).toBe("Function");
    // TODO: This Type should use raw js features.
    // expect(getDataType(async () => {})).toBe("AsyncFunction");
  });

  test("Get Map/Set & WeakMap/WeakSet", () => {
    expect(getDataType(new Map())).toBe("Map");
    expect(getDataType(new Set())).toBe("Set");
    expect(getDataType(new WeakMap())).toBe("WeakMap");
    expect(getDataType(new WeakSet())).toBe("WeakSet");
  });
});
