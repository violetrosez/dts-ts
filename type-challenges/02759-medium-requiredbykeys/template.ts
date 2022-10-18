// 你的答案
// 方式一, 处理值类型
type NoUndefined<T> = T extends undefined ? never : T;
type RequiredByKeys<
  T,
  K = keyof T
> = Omit<Omit<T, keyof T & K> & {
  /* 
   * 去除值中的 undefined
   *
   * 方式一: T[P] & {}, 也即 NonNullable<T[P]>
   * 方式二: NoUndefined<T[P]>
   * 方式三: T[P] extends infer V ? V extends undefined ? never : V : never
   * 方式四: T[P] extends infer V | undefined ? V : T[P]
   * 方式五: [P in keyof T as P extends K ? P : never]-?: T[P]
   * */
  [P in keyof T & K]-?:  T[P] & {}
}, never>

// // 方式二,  处理key即可
// type RequiredByKeys<
//   T,
//   K = keyof T
// > = Omit<Omit<T, keyof T & K> & {
//   [P in keyof T as P extends K ? P : never]-?: T[P]
// }, never>
