type MaxDepth<T extends any[], D extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends any[]
    ? MaxDepth<[...F, ...R], [...D, unknown]>
    : R extends any[]
    ? MaxDepth<R, D>
    : D["length"]
  : D["length"];

type Flatten2<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...F, ...Flatten2<R>]
    : [F, ...Flatten2<R>]
  : [];

/**
 * T  要扁平的数组
 * D1 传入的要扁平的层数
 * D2 数组T的最大深度
 * A  用来记录已经扁平的层数
 */
type FlattenDepth<
  T extends any[],
  D1 extends number = 1,
  D2 = MaxDepth<T>,
  A extends unknown[] = []
> = A["length"] extends D1 | D2
  ? T
  : FlattenDepth<Flatten2<T>, D1, D2, [...A, unknown]>;
