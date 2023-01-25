const { toString: getTypeString } = Object.prototype;
const reg = /(?<=\[object )\w+(?=\])/;

export enum DataType {
  UNDEFINED = "Undefined",
  NULL = "Null",
  OBJECT = "Object",
  ARRAY = "Array",
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "BOOLEAN",
  MAP = "Map",
  SET = "Set",
  WEAKMAP = "WeakMap",
  WEAKSET = "WeakSet",
  PROMISE = "Promise",
  FUNCTION = "Function",
  ASYNCFUNCTION = "AsyncFunction",
  WEBSOCKET = "WebSocket",
}

export type ReturnType = DataType | undefined;

export const getDataType = (value: any): ReturnType =>
  getTypeString.call(value).match(reg)?.[0] as ReturnType;
