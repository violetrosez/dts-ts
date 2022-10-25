type Fibonacci<
  T extends number,
  F extends unknown[] = [],
  U1 extends unknown[] = [],
  U2 extends unknown[] = [1]
> = T extends F["length"]
  ? U1["length"]
  : Fibonacci<T, [1, ...F], U2, [...U1, ...U2]>;
