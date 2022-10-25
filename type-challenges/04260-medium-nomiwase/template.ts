type Combinations<T extends string, U = T> = U extends T
  ? U | `${U}${Combinations<Exclude<T, U>>}`
  : never

type AllCombinations<S extends string> = Combinations<StringToUnion<S>>


