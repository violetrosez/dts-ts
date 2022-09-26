// 只有 [x: string]情况下 string extends string 才成立, 否则 string extends 字面量 不成立
type RemoveIndexSignature<T extends Record<keyof any, unknown>> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};
