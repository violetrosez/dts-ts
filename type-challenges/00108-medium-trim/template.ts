type TrimRight<S extends string> = S extends `${infer R}${' '|'\n'|'\t'}` ? TrimRight<R> : S
type Trim<S extends string> = TrimRight<TrimLeft<S>>

