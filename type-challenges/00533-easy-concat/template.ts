type Concat<T extends any[], U extends any[]> = [...T,...U]


type First1<T extends any[]> = T extends [infer F,...infer R] ? F : never
type Tail<T extends any[]> = T extends [...infer R,infer F] ? F : never
