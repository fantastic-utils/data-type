const { toString: getTypeString } = Object.prototype;
const reg = /(?<=\[object )\w+(?=\])/;

export type UNKNOW_TYPE = 'unknown';
export type ReturnType = string | UNKNOW_TYPE;

export const UNKNOW_TYPE = 'unknown';

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
export const getDataType = (value: any, short: boolean = false): ReturnType =>
  (getTypeString.call(value).match(reg)?.[0] ?? UNKNOW_TYPE) as ReturnType;
