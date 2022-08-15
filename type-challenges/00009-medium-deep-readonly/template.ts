// type DeepReadonly<T> = {
//    readonly [K in keyof T] : T[K] extends Object ? DeepReadonly<T[K]> : T[K]
// }
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends Function ? T[P] : T[P] extends Object ? DeepReadonly<T[P]> : T[P];
}