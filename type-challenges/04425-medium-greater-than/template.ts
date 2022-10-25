type GreaterThan<T extends number, U extends number, A extends unknown[] = []> = T extends A['length']
? false :
U extends A['length'] ? true : GreaterThan<T,U,[1,...A]>

