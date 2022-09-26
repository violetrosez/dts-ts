// 条件类型的分发必须是裸类型 裸类型是指没有被数组,元组和Promise等包装过的类型
type IsUnion<T,O=T> = [T] extends [never] ? false : T extends O ? [O] extends [T] ? false : true : never
// 1 判断是不是never
// 2 利用分发特性 判断是不是裸类型
// 3 O 保持
// 如果是单类型 [String] extends [String] 成立
// 反之  [string] extends [String | Number] 不成立