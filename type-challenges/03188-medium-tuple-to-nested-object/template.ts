type TupleToNestedObject<T, U> = T extends [infer F, ...infer L]
  ? F extends PropertyKey
    ? Record<F, TupleToNestedObject<L, U>>
    : never
  : U;
