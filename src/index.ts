const { toString: getTypeString } = Object.prototype;
const reg = /(?<=\[object )\w+(?=\])/;

export type ReturnType = string | undefined;

/**
 * Get the correct type from value
 *
 * @description the type is a enum value like `String`,
 *   `Number`, `Boolean`, `Object`, `Array`, `Map`,
 *   `Set`, `Promise`, `WeakMap`, `Websocket` etc...
 *
 * @param value Any value
 * @returns The Type name
 */
export const getDataType = (value: any): ReturnType =>
  getTypeString.call(value).match(reg)?.[0] as ReturnType;
