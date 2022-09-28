type Mer<T> = {
    [K in keyof T]:T[K]
} 
type PartialByKeys<T, K = keyof T> = Mer<
{
    [P in keyof T & K ]?: T[P]
} & {
    [P in keyof T as P extends K ? never: P ]: T[P]
}
>


// type PartialByKeys<T, K = keyof T> = Omit<{
//     [P in keyof T & K]?: T[P]
//   } & {
//     [P in keyof T as P extends K ? never: P]: T[P]
//   }, never>
