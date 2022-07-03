type MyExclude<T, U> = T extends U ? never : T

type t1 = 'a'|'b'
type t2 = 'a'
type c = MyExclude<t1, t2>