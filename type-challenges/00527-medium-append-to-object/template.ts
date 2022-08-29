// PropertyKey 等同于 string | number | symbol
type AppendToObject<T, U extends PropertyKey, V> = {
    [K in keyof T|U]: K extends keyof T ? T[K] : V
}

