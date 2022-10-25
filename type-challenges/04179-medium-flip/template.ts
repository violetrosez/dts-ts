type Flip<T extends Record<any,any>> = {
    [K in keyof T as `${T[K]}`] : K
}
